import "./List.scss";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import "@esri/calcite-components/dist/components/calcite-pagination";
import Widget from "./Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { Category, HappyMoment, HappyMoments } from "../interfaces";

type ConstructProperties = Pick<List, "happyMoments">;

@subclass("happy-moments.List")
class List extends Widget<ConstructProperties> {
  @property()
  happyMoments: HappyMoments;

  @property()
  selectedCategory: Category;

  render() {
    const { data } = this.happyMoments;
    return (
      <div class="list-container">
        <ul>
          {data.map((moment: HappyMoment, index: number) => {
            return (
              <li
                key={index}
                class={moment.category}
                styles={{
                  display: this.selectedCategory === moment.category ? "inherit" : "hidden"
                }}
              >
                {moment.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
