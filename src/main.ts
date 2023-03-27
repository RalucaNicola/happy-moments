import "@esri/calcite-components/dist/calcite/calcite.css";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@arcgis/core/assets/esri/themes/light/main.css";
import esriConfig from "@arcgis/core/config";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import App from "./components/App";
import AppStore from "./stores/AppStore";
import { websceneId } from "./data";
import Zoom from "@arcgis/core/widgets/Zoom";
import Color from "@arcgis/core/Color";

setAssetPath(window.document.URL);
esriConfig.assetsPath = "./assets";

const map = new WebScene({
  portalItem: {
    id: websceneId
  }
});

const view = (window["view"] = new SceneView({
  container: "view",
  map,
  alphaCompositingEnabled: true,
  environment: {
    background: {
      type: "color",
      color: [0, 0, 0, 0]
    },
    starsEnabled: false,
    atmosphereEnabled: false,
    lighting: {
      type: "virtual"
    }
  },
  highlightOptions: {
    color: new Color("rgba(255, 173, 51, 255)")
  },
  ui: {
    components: []
  },
  padding: {
    top: 150
  },
  navigation: {
    mouseWheelZoomEnabled: false
  }
}));

// add navigation only on mouse enabled devices
if (matchMedia("(pointer:fine)").matches) {
  const zoom = new Zoom({
    view: view
  });
  view.ui.add(zoom, "bottom-right");
}

window.onresize = (event) => {
  setPadding();
};
setPadding();

function setPadding(): void {
  const width = window.innerWidth;
  if (width < 500) {
    view.padding = { top: 150, left: 0 };
  } else {
    view.padding = { top: 150, left: Math.min(width - 500, 500) };
  }
}

const store = new AppStore({ view });
new App({ container: document.getElementById("ui"), store });
