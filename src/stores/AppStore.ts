import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { watch } from "@arcgis/core/core/reactiveUtils";
import * as query from "@arcgis/core/rest/query";
import Query from "@arcgis/core/rest/support/Query";
import { categoryKeys, tableURL } from "../data";
import { CachedStatistic, Statistics, TimePeriod } from "../interfaces";

@subclass("happy-moments.AppStore")
class AppStore extends Accessor {
  constructor() {
    super();
    this.timePeriod = TimePeriod.Day;

    this.addHandles([
      watch(
        () => this.timePeriod,
        () => {
          this._loadStatistics();
        },
        {
          initial: true
        }
      )
    ]);
  }
  @property()
  timePeriod: TimePeriod;

  @property()
  country: string | null = null;

  @property()
  statistics: Statistics | null = null;

  private _cachedStatistics: Array<CachedStatistic> = [];

  toggleTimePeriod(): void {
    this.timePeriod = this.timePeriod === TimePeriod.Day ? TimePeriod.Month : TimePeriod.Day;
  }

  private async _loadStatistics() {
    const cachedStatistic = this._cachedStatistics.find(
      (element) => element.country === this.country && element.timePeriod === this.timePeriod
    );

    if (cachedStatistic) {
      this.statistics = cachedStatistic.data;
    } else {
      let queryURL = this.timePeriod === TimePeriod.Day ? tableURL.day : tableURL.month;

      try {
        const queryResults = await query.executeQueryJSON(
          queryURL,
          new Query({
            where: "1=1",
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

        this.statistics = data;
        this._cachedStatistics.push({
          country: this.country,
          timePeriod: this.timePeriod,
          data
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default AppStore;
