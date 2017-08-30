let url = 'https://orange-weather-api.herokuapp.com/';

var app = new Moon({
  el: '#app',
  data: {
    lastUpdated: {
      date: null,
      prettyDate: null,
      prettyTime: null
    },
    forecasts: null
  },
  methods: {
    fetchData: function () {
      var self = this;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function () {
        var json = JSON.parse(xhr.responseText);
        self.set('lastUpdated', json.lastUpdated);
        self.set('forecasts', json.forecasts);
      };
      xhr.send();
    }
  },
  hooks: {
    mounted: function () {
      this.callMethod('fetchData');
    }
  }
});
