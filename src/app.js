// let url = 'https://orange-weather-api-gclktlusnl.now.sh/';
let url = 'http://0.0.0.0:3000';

var app = new Vue({
  el: '#app',
  data: {
    lastUpdated: {},
    forecasts: null
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open('GET', url);
      xhr.onload = function () {
        var json = JSON.parse(xhr.responseText);
        self.lastUpdated = json.lastUpdated;
        self.forecasts = json.forecasts;
      };
      xhr.send();
    }
  }
});
