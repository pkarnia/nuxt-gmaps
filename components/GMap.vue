<template>
  <div class="GMap">
    <div ref="map" class="GMap__Wrapper"></div>
    <slot/>
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'
var MarkerClusterer = require('node-js-marker-clusterer');
export default {
  props: {
    options: {
      type: Object,
      default: () =>{
        return {}
      }
    },
    zoom: {
      type: Number,
      default: 10
    },
    cluster: {
      type: Object,
      default: () =>{
        return {}
      }
    },
    center: {
      type: Object,
      default: () => {
        return {
          lat: 45.8150,
          lng: 15.9819
        }
      }
    }
  },

  data(){
    return{
      map: null,
      google: null,
      markerCluster: null,
      markers: [],
    }
  },

	async mounted(){
    if(this.$GMaps.loaded === false){
      this.$GMaps.loaded = true;
      try{
        let GMapSettings = {
          apiKey: this.$GMaps.apiKey
        }

        if(this.$GMaps.libraires !== undefined){
          GMapSettings['libraires'] = this.$GMaps.libraires
        }

        const google = await GoogleMapsApiLoader(GMapSettings)

        this.google = google;
        this.initMap();
        this.$emit('init', this.google);
        this.$emit('loaded', this.google);
      } catch(e){
      }
    }
  },

  beforeDestroy(){
    this.$GMaps.loaded = false;
  },

  methods: {
    initMap(){
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.center,
        zoom: this.zoom,
        ...this.options
      });

      this.$children.forEach(child =>{
        child.initMarker();
      });

      if(Object.keys(this.cluster).length > 0){
        this.markerCluster = new MarkerClusterer(this.map, this.markers, {...this.cluster.options});
      }
    }
  }
}
</script>

<style>
	.GMap__Wrapper{
    width: 100%;
    height: 400px;
  }
</style>
