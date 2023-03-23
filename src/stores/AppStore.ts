import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { watch } from "@arcgis/core/core/reactiveUtils";
import * as query from "@arcgis/core/rest/query";
import Query from "@arcgis/core/rest/support/Query";
import { categoryKeys, tableURL } from "../data";
import { Statistics, TimePeriod } from "../interfaces";

@subclass("happy-moments.AppStore")
class AppStore extends Accessor {
  constructor() {
    super();
    this.timePeriod = TimePeriod.Day;

    this.addHandles([
      watch(
        () => this.timePeriod,
        (timePeriod) => {
          console.log(timePeriod);
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
  statistics: Statistics = {
    dayPeriod: null,
    monthPeriod: null
  };

  toggleTimePeriod(): void {
    this.timePeriod = this.timePeriod === TimePeriod.Day ? TimePeriod.Month : TimePeriod.Day;
  }

  private async _loadStatistics() {
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

      this.statistics = {
        ...this.statistics,
        [this.timePeriod === TimePeriod.Day ? "dayPeriod" : "monthPeriod"]: {
          updated: true,
          data
        }
      };
    } catch (error) {
      console.log(error);
    }
  }
}

export default AppStore;
