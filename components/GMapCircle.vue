<template>
  <div class="GMap__Marker" v-if="!circleLoaded">
    <slot v-if="circle === null"/>
  </div>
</template>

<script>
export default {
  props: {
    options: Object,
  },

  data() {
    return {
      circle: null,
      circleLoaded: false
    }
  },

  mounted() {
    this.init();
  },

  destroyed() {
    this.circle.setMap(null);
  },

  methods: {
    init() {
      if (this.$parent.google) {
        this.circle = new this.$parent.google.maps.Circle({
          map: this.$parent.map,
          ...this.options
        });

        this.circleLoaded = true;
      }
    }
  },
}
</script>