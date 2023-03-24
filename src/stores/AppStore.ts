import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { watch } from "@arcgis/core/core/reactiveUtils";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as query from "@arcgis/core/rest/query";
import Query from "@arcgis/core/rest/support/Query";
import SceneView from "@arcgis/core/views/SceneView";
import { categoryKeys, pageSize, tableURL } from "../data";
import { CachedStatistic, Category, Country, HappyMoments, Statistics, TimePeriod } from "../interfaces";

@subclass("happy-moments.AppStore")
class AppStore extends Accessor {
  constructor({ view }: { view: SceneView }) {
    super();
    this.timePeriod = TimePeriod.Day;
    this.country = null;
    this._view = view;

    this.addHandles([
      // whenever time period changes or a country is selected => get the new statistics
      watch(
        () => [this.timePeriod, this.country],
        () => {
          this._loadStatistics();
          this.pagination = 0;
        },
        {
          initial: true
        }
      ),
      watch(
        () => [this.country, this.pagination, this.timePeriod],
        ([country]) => {
          if (country) {
            this._loadHappyMoments();
          } else {
            this.happyMoments = null;
            this.pagination = 0;
          }
        }
      )
    ]);

    view.when(() => {
      const layer = this._view.map.findLayerById("187000ea9b6-layer-99") as FeatureLayer;
      layer.outFields = ["iso_a3", "Name"];
      this.addHandles([this._setupClickHitTest(layer)]);
    });
  }
  @property()
  timePeriod: TimePeriod;

  @property()
  country: Country | null;

  @property()
  statistics: Statistics | null = null;

  private _cachedStatistics: Array<CachedStatistic> = [];

  @property()
  happyMoments: HappyMoments = null;

  @property()
  pagination: number = 0;

  setPagination = (value: number) => {
    this.pagination = value;
  };

  @property()
  selectedCategory: Category;

  private _view: SceneView;

  toggleTimePeriod(): void {
    this.timePeriod = this.timePeriod === TimePeriod.Day ? TimePeriod.Month : TimePeriod.Day;
  }

  removeCountryFilter(): void {
    this.country = null;
  }

  private async _loadStatistics() {
    const cachedStatistic = this._cachedStatistics.find((element) => {
      if (this.country) {
        return element.country === this.country.isoId && element.timePeriod === this.timePeriod;
      } else {
        return element.country === null && element.timePeriod === this.timePeriod;
      }
    });

    if (cachedStatistic) {
      this.statistics = cachedStatistic.data;
    } else {
      let queryURL = this.timePeriod === TimePeriod.Day ? tableURL.day : tableURL.month;

      try {
        const queryResults = await query.executeQueryJSON(
          queryURL,
          new Query({
            where: this.country ? `country = '${this.country.isoId}'` : "1=1",
            outStatistics: [
              {
                onStatisticField: "hmid",
                statisticType: "count",
                outStatisticFieldName: "counts"
              }
            ],
            groupByFieldsForStatistics: ["category"]
          })
        );

        const data = queryResults.features.map((feature) => feature.attributes);
        data.sort((a, b) => b.counts - a.counts);
        const sum = data.reduce((sum, element) => {
          return sum + element.counts;
        }, 0);
        data.forEach((element) => {
          element.percentage = Math.floor((element.counts / sum) * 100);
          element.text = categoryKeys[element.category];
        });

        const statistics = {
          country: this.country ? this.country.name : null,
          data
        };
        this._cachedStatistics.push({
          country: this.country ? this.country.isoId : null,
          timePeriod: this.timePeriod,
          data: statistics
        });
        this.statistics = statistics;
      } catch (error) {
        console.log(error);
      }
    }
  }

  private _setupClickHitTest(layer: FeatureLayer): IHandle {
    return this._view.on("click", (event) => {
      this._view.hitTest(event, { include: layer }).then((response) => {
        if (response.results.length) {
          const result = response.results[0];
          if (result?.type === "graphic") {
            const { iso_a3, Name } = result.graphic.attributes;
            this.country = {
              isoId: iso_a3,
              name: Name
            };
          }
        }
      });
    });
  }

  private async _loadHappyMoments() {
    let queryURL = this.timePeriod === TimePeriod.Day ? tableURL.day : tableURL.month;
    try {
      const queryResults = await query.executeQueryJSON(
        queryURL,
        new Query({
          where: `country = '${this.country.isoId}'`,
          start: this.pagination,
          num: pageSize,
          outFields: ["cleaned_hm", "category"]
        })
      );

      const data = queryResults.features.map((feature) => {
        const { cleaned_hm: text, category } = feature.attributes;
        return { text, category };
      });

      const queryCount = await query.executeForCount(
        queryURL,
        new Query({
          where: `country = '${this.country.isoId}'`
        })
      );

      this.happyMoments = {
        total: queryCount,
        data
      };
    } catch (error) {
      console.log(error);
    }
  }
}

export default AppStore;
