<script lang="ts">
  import Map from "ol/Map";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import VectorLayer from "ol/layer/Vector";
  import VectorSource from "ol/source/Vector";
  import Style from "ol/style/Style";
  import Icon from "ol/style/Icon";
  import Point from "ol/geom/Point";
  import Feature from "ol/Feature";
  import OSM from "ol/source/OSM";
  import { fromLonLat } from "ol/proj";

  let { latitude = 51.5074, longitude = 0.1278 } = $props();

  let map: Map;

  function initializeMap() {
    console.log("Initializing map", longitude, latitude);
    const initialPosition = fromLonLat([longitude, latitude]);
    const marker = new Feature({
      geometry: new Point(initialPosition),
    });

    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "https://cdn-icons-png.flaticon.com/512/3082/3082383.png",
          width: 34,
        }),
      }),
    });

    map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        markerLayer,
      ],
      view: new View({
        center: initialPosition,
        zoom: 16,
      }),
    });
  }

  $effect(initializeMap);
  $effect(() => updateMapCenterAndMarker(latitude, longitude));
  $inspect(latitude, longitude);

  function updateMapCenterAndMarker(lat: number, long: number) {
    console.log("Updating map center and marker position");
    if (map) {
      const position = fromLonLat([long, lat]);
      map.getView().setCenter(position);
      // Assuming there's only one feature (the marker) in the marker layer
      map
        .getLayers()
        .getArray()[1]
        .getSource()
        .getFeatures()[0]
        .getGeometry()
        .setCoordinates(position);
    }
  }
</script>

<div id="map" style="width: 100%; height: 400px;"></div>
