const path = require('path');

module.exports = function cookies (_options) {
  const defaultOptions = {
    components: {
      GMap: path.resolve(__dirname, '../components/GMap.vue'),
      GMapMarker: path.resolve(__dirname, '../components/GMapMarker.vue'),
      GMapCircle: path.resolve(__dirname, '../components/GMapCircle.vue'),
      GMapPolyline: path.resolve(__dirname, '../components/GMapPolyline.vue'),
      GMapInfoWindow: path.resolve(__dirname, '../components/GMapInfoWindow.vue')
    }
  }

  const options = Object.assign(defaultOptions, _options)

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-google-maps.js',
    options
  })
}

module.exports.meta = require('../package.json')
