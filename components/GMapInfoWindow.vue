<template>
  <div class="GMap__InfoWindow">
    <slot/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      infoWindow: null
    }
  },

	methods: {
    initInfoWindow(){
      this.infoWindow = new google.maps.InfoWindow({
        content: this.$el.innerHTML
      });
      this.$parent.marker.infoWindow = this.infoWindow;
    }
  },
}
</script>