<template>
  <div>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326" id="map">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div id="sidebar">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return { 
        zoom: 2,
        center: [0, 0],
        rotation: 0,
        geolocPosition: undefined,
      }
    },
  }
</script>
<style>
  #map {
    position: fixed;
    left:0px;
    right:0px;
    top:0px;
    bottom:0px;
    z-index:1;
  }
  #sidebar {
    position: fixed;
    width:250px;
    height:300px;
    right:10px;
    top:10px;
    z-index:5;
  }
</style>
