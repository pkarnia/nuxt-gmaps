# Nuxt GMaps
Try it out here:
[Nuxt.js Google Maps Module](https://codesandbox.io/s/6j6zw48l83)
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FJPYXXXL4SQSE&source=url)
### Usage
| npm install nuxt-gmaps | yarn add nuxt-gmaps |
|--|--|
```javascript
//nuxt.config.js
modules: [
  ['nuxt-gmaps', {
    key: '<API-Key>',
    //you can use libraries: ['places']
  }]
]
```

### Documentation
[Official Google Documentation](https://developers.google.com/maps/documentation/javascript/tutorial)

### Example
```html
<GMap
	:cluster="{options: {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}}" :center="{lat: locations[0].lat, lng: locations[0].lng}"
	:options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: false, zoomControl: true, gestureHandling: 'cooperative', styles: mapStyle}"
	:zoom="6">
	<GMapMarker v-for="location in locations"
		:key="location.id"
		:position="{lat: location.lat, lng: location.lng}"
		:options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
		@click="currentLocation = location">
		<GMapInfoWindow>
			<code>
				lat: {{ location.lat }},
				lng: {{ location.lng }}
			</code>
		</GMapInfoWindow>
	</GMapMarker>
</GMap>
```
```javascript
data(){
  return{
    locations: [
      {
        lat: 44.933076,
        lng: 15.629058
      },
      {
        lat: 45.8150,
        lng: 15.9819
      },
      {
        lat: 45.12,
        lng: 16.21
      }
    ],
    pins: {
        selected: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB...',
        notSelected: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAM...'
    },

    mapStyle: [
      ...
    ],

    currentLocation: {}
  }
}
```
### Marker Events
- Click
- Mouseenter
- Mouseleave