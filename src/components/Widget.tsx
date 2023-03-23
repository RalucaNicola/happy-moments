import { subclass } from "@arcgis/core/core/accessorSupport/decorators";
import EsriWidget from "@arcgis/core/widgets/Widget";

export type WidgetProperties = ConstructorParameters<typeof EsriWidget>[0];

// declare our own Widget class to avoid boilerplate in defining the constructor
@subclass("happy-moments.Widget")
class Widget<Properties = unknown> extends EsriWidget {
  constructor(properties: Properties & WidgetProperties) {
    super(properties);
  }
}
export default Widget;
