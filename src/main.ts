import "@esri/calcite-components/dist/calcite/calcite.css";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@arcgis/core/assets/esri/themes/light/main.css";
import esriConfig from "@arcgis/core/config";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import App from "./components/App";
import AppStore from "./stores/AppStore";
import { websceneId } from "./data";

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
  ui: {
    components: []
  },
  navigation: {
    mouseWheelZoomEnabled: false,
    browserTouchPanEnabled: false
  }
}));
const store = new AppStore({ view });
new App({ container: document.getElementById("ui"), store });
