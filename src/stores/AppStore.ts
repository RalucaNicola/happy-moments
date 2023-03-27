import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { watch } from "@arcgis/core/core/reactiveUtils";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import * as query from "@arcgis/core/rest/query";
import Query from "@arcgis/core/rest/support/Query";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import SceneView from "@arcgis/core/views/SceneView";
import View from "@arcgis/core/views/View";
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
            this.selectionHighlight?.remove();
          }
        }
      )
    ]);

    view.when(() => {
      const selectionLayer = this._view.map.findLayerById("18718b1e65f-layer-91") as FeatureLayer;
      selectionLayer.outFields = ["iso_a3", "Name"];
      view.whenLayerView(selectionLayer).then((lyrView) => {
        this.selectionLayerView = lyrView;
      });
      const tileLayer3m = this._view.map.findLayerById("18718a5f1c6-layer-89") as TileLayer;
      const tileLayer24h = this._view.map.findLayerById("18718ba9b7f-layer-97") as TileLayer;
      this.addHandles([
        this._setupClickHitTest(selectionLayer),

        watch(
          () => [this.timePeriod],
          () => {
            if (this.timePeriod === TimePeriod.Day) {
              tileLayer3m.visible = false;
              tileLayer24h.visible = true;
              selectionLayer.definitionExpression = "happy_moments_count_24h > 0";
            } else {
              tileLayer3m.visible = true;
              tileLayer24h.visible = false;
              selectionLayer.definitionExpression = "happy_moments_3m_count > 0";
            }
          },
          {
            initial: true
          }
        )
      ]);

      if (matchMedia("(pointer:fine)").matches) {
        this.addHandles([this._setupHoverHitTest(selectionLayer)]);
      }
    });
  }

  @property()
  selectionLayerView: FeatureLayerView = null;

  @property()
  selectionHighlight: IHandle;

  @property()
  mouseOverHighlight: IHandle;

  @property()
  mouseOverGraphic: Graphic = null;

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

  private _setupHoverHitTest(layer: FeatureLayer): IHandle {
    return this._view.on("pointer-move", (event) => {
      this._view.hitTest(event, { include: layer }).then((response) => {
        if (response.results.length) {
          this._view.container.style.cursor = "pointer";
          const result = response.results[0];
          if (result?.type === "graphic") {
            if (this.mouseOverGraphic) {
              if (this.mouseOverGraphic.attributes.OBJECTID !== result.graphic.attributes.OBJECTID) {
                this.mouseOverHighlight?.remove();
                this.mouseOverHighlight = this.selectionLayerView.highlight(result.graphic);
                this.mouseOverGraphic = result.graphic;
              }
            } else {
              this.mouseOverHighlight = this.selectionLayerView.highlight(result.graphic);
              this.mouseOverGraphic = result.graphic;
            }
          }
        } else {
          this._view.container.style.cursor = "revert";
          this.mouseOverHighlight?.remove();
          this.mouseOverGraphic = null;
        }
      });
    });
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
            this.selectionHighlight?.remove();
            this.selectionHighlight = this.selectionLayerView.highlight(result.graphic);
            this._view.goTo(result.graphic);
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
