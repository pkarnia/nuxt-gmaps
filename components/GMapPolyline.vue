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

  methods: {
    init(){
      this.polyline = new this.$parent.google.maps.Polyline({
        map: this.$parent.map,
        ...this.options
      });

      this.polylineLoaded = true;
    }
  },
}
</script>