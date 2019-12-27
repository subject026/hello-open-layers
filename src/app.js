import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

// need view, layers and target

function init() {
  console.log("whats");

  const map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 0
    }),
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    target: "map-container"
  });
  console.log(map);
}

window.onload = init;
