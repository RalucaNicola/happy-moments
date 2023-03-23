import "./Chart.scss";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import Widget from "./Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { PeriodStatistics, Statistics } from "../interfaces";

type ConstructProperties = Pick<Chart, "statistics">;

@subclass("happy-moments.Chart")
class Chart extends Widget<ConstructProperties> {
  @property()
  statistics: PeriodStatistics;

  render() {
    const hasData = this.statistics && this.statistics.data;
    console.log("chart rendered", this.statistics);
    return (
      <div class="chart-container">
        {hasData ? this._renderDescription() : "Loading thoughts..."}
        {hasData ? this._renderChart() : ""}
      </div>
    );
  }

  private _renderDescription(): tsx.JSX.Element {
    const [c1, c2, c3, c4, c5, c6, c7] = this.statistics.data;
    return (
      <p class="description">
        Most happy moments are related to <span class={c1.category}>{c1.text}</span> (
        {c1.percentage}%) and <span class={c2.category}>{c2.text}</span> ({c2.percentage}%). Some
        sentences were about <span class={c3.category}>{c3.text}</span> ({c3.percentage}%),{" "}
        <span class={c4.category}>{c4.text}</span> ({c4.percentage}%),{" "}
        <span class={c5.category}>{c5.text}</span> ({c5.percentage}%),{" "}
        <span class={c6.category}>{c6.text}</span> ({c6.percentage}%) and{" "}
        <span class={c7.category}>{c7.text}</span> ({c7.percentage}%).
      </p>
    );
  }

  private _renderChart(): tsx.JSX.Element {
    return (
      <div class="chart">
        {this.statistics.data.map((element) => (
          <button class={element.category} styles={{ width: `${element.percentage}%` }}></button>
        ))}
      </div>
    );
  }
}

export default Chart;
