import "./App.scss";

import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import Widget from "./Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import AppStore from "../stores/AppStore";
import { Category, HappyMoments, Statistics, TimePeriod } from "../interfaces";
import List from "./List";
import { formatNumber } from "../utils";
import { pageSize } from "../data";

type ConstructProperties = Pick<App, "store">;

@subclass("happy-moments.App")
class App extends Widget<ConstructProperties> {
  @property()
  readonly store: AppStore;

  render() {
    const { timePeriod, statistics, happyMoments, selectedCategory, pagination } = this.store;

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
          {statistics ? this._renderDescription(statistics) : ""}
          {statistics && statistics.country ? (
            <button
              onclick={() => {
                this.store.removeCountryFilter();
              }}
              class="remove-filter"
            >
              Remove country filter
            </button>
          ) : (
            ""
          )}
        </header>
        {this._renderHappyMoments(happyMoments, selectedCategory)}
        {this._renderPagination(happyMoments, pagination)}
      </div>
    );
  }

  private _renderDescription(statistics: Statistics): tsx.JSX.Element {
    const { country } = statistics;
    const total = statistics.data.reduce((total, data) => total + data.counts, 0);
    return (
      <div class="description">
        {total > 0 ? (
          <p>
            {this._getIntroPhrase(country)}
            {statistics.data.map((element, index) => (
              <span key={index}>
                <span class={this.classes(element.category, "underline")}>{element.text}</span> (
                {formatNumber(element.counts)}){this._setPunctuation(index, statistics.data.length)}
              </span>
            ))}
          </p>
        ) : (
          <p>
            No happy moments found for <b class="country">{country}</b> for this period.
          </p>
        )}

        {country ? (
          ""
        ) : (
          <p class="instruction">Click on a country to read the happy moments people shared.</p>
        )}
      </div>
    );
  }

  private _getIntroPhrase(country: string) {
    if (country) {
      return (
        <span>
          In <b class="country">{country}</b> happy moments are related to{" "}
        </span>
      );
    } else {
      return <span>Around the world, happy moments are related to </span>;
    }
  }

  private _setPunctuation(index: number, length: number) {
    if (length === 1) {
      return ". ";
    } else {
      if (index === length - 2) {
        return " and ";
      } else {
        if (index === length - 1) {
          return ". ";
        } else {
          return ", ";
        }
      }
    }
  }

  _renderHappyMoments(happyMoments: HappyMoments, selectedCategory: Category) {
    if (happyMoments && happyMoments.total) {
      return <List happyMoments={happyMoments}></List>;
    } else {
      return "";
    }
  }

  _renderPagination(happyMoments: HappyMoments, pagination: number) {
    if (happyMoments && happyMoments.total > pageSize) {
      return (
        <calcite-pagination
          class="pagination"
          page-size={pageSize.toString()}
          start-item={pagination.toString()}
          total-items={happyMoments.total.toString()}
          scale="s"
          numbering-system="latn"
          onCalcitePaginationChange={(event: any) => {
            this.store.setPagination(event.target.startItem - 1);
          }}
        ></calcite-pagination>
      );
    }
  }
}

export default App;
