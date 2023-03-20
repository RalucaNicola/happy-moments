import "@esri/calcite-components/dist/calcite/calcite.css";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@arcgis/core/assets/esri/themes/light/main.css";
import esriConfig from "@arcgis/core/config";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";

setAssetPath(window.document.URL);
esriConfig.assetsPath = "./assets";

const map = new WebScene({
  portalItem: {
    id: "4c0daae2965d4c2e859dfa398f27d3da"
  }
});

const view = new SceneView({
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
});
