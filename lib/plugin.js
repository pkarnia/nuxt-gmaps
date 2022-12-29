import Vue from 'vue';
import GMap from <%= serialize(options.components.GMap) %>;
import GMapMarker from <%= serialize(options.components.GMapMarker) %>;
import GMapCircle from <%= serialize(options.components.GMapCircle) %>;
import GMapPolyline from <%= serialize(options.components.GMapPolyline) %>;
import GMapInfoWindow from <%= serialize(options.components.GMapInfoWindow) %>;
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapPolyline', GMapPolyline);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: <%= serialize(options.key) %>, loaded: false, libraries: <%= serialize(options.libraries) %>})
}
