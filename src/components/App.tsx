import "./App.scss";

import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import Widget from "./Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import Chart from "./Chart";
import AppStore from "../stores/AppStore";
import { TimePeriod } from "../interfaces";

type ConstructProperties = Pick<App, "store">;

@subclass("happy-moments.App")
class App extends Widget<ConstructProperties> {
  @property()
  readonly store: AppStore;

  render() {
    const { timePeriod, statistics } = this.store;
    return (
      <div class="ui-layout">
        <header>
          <h2>
            What made you happy in the last{" "}
            <button
              class={this.classes(timePeriod === TimePeriod.Day ? "focused" : "")}
              onclick={() => this.store.toggleTimePeriod()}
            >
              24 hours
            </button>
            <button
              class={this.classes(timePeriod === TimePeriod.Month ? "focused" : "")}
              onclick={() => this.store.toggleTimePeriod()}
            >
              3 months
            </button>
            ?
          </h2>
          <p>Click on each country below to see what people replied.</p>
        </header>
        <div>
          <Chart statistics={timePeriod === TimePeriod.Day ? statistics.dayPeriod : statistics.monthPeriod}></Chart>
        </div>
      </div>
    );
  }
}

export default App;
