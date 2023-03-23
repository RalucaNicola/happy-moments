import "./Chart.scss";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import Widget from "./Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { Country, Statistics } from "../interfaces";
import { formatNumber } from "../utils";

type ConstructProperties = Pick<Chart, "statistics">;

@subclass("happy-moments.Chart")
class Chart extends Widget<ConstructProperties> {
  @property()
  statistics: Statistics;

  render() {
    return (
      <div class="chart-container">
        {this.statistics ? this._renderDescription() : "Loading thoughts..."}
        {this.statistics ? this._renderChart() : ""}
      </div>
    );
  }

  private _renderDescription(): tsx.JSX.Element {
    const country = this.statistics.country;
    console.log(this.statistics);
    return (
      <p class="description">
        {country
          ? `In ${country} happy moments are related to `
          : "Around the world, happy moments are related to "}
        {this.statistics.data.map((element, index) => (
          <span key={index}>
            <span class={this.classes(element.category, "underline")}>{element.text}</span> (
            {formatNumber(element.counts)})
            {this._setPunctuation(index, this.statistics.data.length)}
          </span>
        ))}
      </p>
    );
  }

  private _setPunctuation(index: number, length: number) {
    if (length === 1) {
      return ".";
    } else {
      if (index === length - 2) {
        return " and ";
      } else {
        if (index === length - 1) {
          return ".";
        } else {
          return ", ";
        }
      }
    }
  }

  private _renderChart(): tsx.JSX.Element {
    return (
      <div class="chart">
        {this.statistics.data.map((element, index) => (
          <button
            key={index}
            class={element.category}
            styles={{ width: `${element.percentage}%` }}
          ></button>
        ))}
      </div>
    );
  }
}

export default Chart;
