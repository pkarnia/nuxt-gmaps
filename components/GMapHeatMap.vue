<template>
  <div class="GMap__HeatMap" v-if="!mapLoaded">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    options: Object,
    items: Array,
  },

  data() {
    return {
      map: null,
      mapLoaded: false,
      points: [],
    }
  },

  mounted() {
    this.init();
  },

  destroyed() {
    this.map.setMap(null);
  },

  methods: {
    init() {
      if (this.$parent.google) {
        this.points = this.items.map(item => {
          return {location: new this.$parent.google.maps.LatLng(item.lat, item.lng), weight: item.weight}
        });
        console.log(this.$parent.google.maps);
        this.map = new this.$parent.google.maps.visualization.HeatmapLayer({
          map: this.$parent.map,
          data: this.points,
          ...this.options
        });

        this.mapLoaded = true;
      }
    }
  },

  watch: {
    'items'(value) {
      this.items = value;
    },
    'options'(value) {
      this.options = value;
    }
  },
}
</script>