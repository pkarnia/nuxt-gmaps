<template>
  <div class="GMap__Polyline" v-if="!polylineLoaded">
    <slot v-if="polyline === null"/>
  </div>
</template>

<script>
export default {
  props: {
    options: Object,
  },

  data(){
    return{
      polyline: null,
      polylineLoaded: false
    }
  },

  mounted() {
    this.init();
  },

  destroyed() {
    this.polyline.setMap(null);
  },

  methods: {
    init() {
      if (this.$parent.google) {
        this.polyline = new this.$parent.google.maps.Polyline({
          map: this.$parent.map,
          ...this.options
        });

        this.polylineLoaded = true;
      }
    }
  },

  watch: {
    'options'(value) {
      this.options = value;
    }
  },
}
</script>