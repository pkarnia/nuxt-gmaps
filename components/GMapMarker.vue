<template>
  <div class="GMap__Marker">
    <slot v-if="marker === null"/>
  </div>
</template>

<script>
export default {
  props: {
    position: Object,
    options: Object,
  },

  data(){
    return{
      marker: null,
    }
  },

  methods: {
    initMarker(){
      let child = undefined;
      this.marker = new this.$parent.google.maps.Marker({
        position: this.position,
        map: this.$parent.map,
        ...this.options
      });

      this.$parent.markers.push(this.marker);

      if(this.$children.length > 0){
        child = this.$children[0];
        child.initInfoWindow();
      }

      this.marker.addListener('click', (e) =>{
        if(child !== undefined) child.infoWindow.open(this.$parent.map, this.marker);
        this.$emit('click', {position: this.position, map: this.$parent.map, markers: this.$parent.markers})
      });
    }
  },

  watch:{
    'options.icon'(value){
      this.marker.setIcon(value)
    }
  }
}
</script>