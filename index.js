// Import stylesheets
import './style.css';

// Load Highcharts
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/timeline')(Highcharts);
require('highcharts/modules/xrange')(Highcharts);

// Write Javascript code!
    Highcharts.chart('container', {
      xAxis: [{
        type: 'datetime'
      }],
      yAxis: [{
        type: ''
      }, {
        type: ''
      }],
      series: [{
        type: 'timeline',
        dataLabels: {
                connectorWidth: 0,
                enabled: false
            },
        data: [{
            x: Date.UTC(1951, 5, 22),
             y: 1.5
        }, {
            x: Date.UTC(1961, 3, 12),
             y: 1.5
        }, {
            x: Date.UTC(1971, 3, 19),
             y: 1.5
        }, {
            x: Date.UTC(1978, 11, 4),
             y: 1.5
        }, {
            x: Date.UTC(1986, 1, 19),
             y: 1.5
        }],
        yAxis: 0
      },
      {
        type: 'xrange',
        yAxis: 1,
        data: [{
          x: Date.UTC(1951, 5, 22),
          x2: Date.UTC(1959, 0, 4),
          y: 0.5,
           color: 'transparent'
        }, {
          x: Date.UTC(1966, 1, 3),
          x2: Date.UTC(1976, 3, 17),
          y: 1,
           color: 'transparent'
        }]
      }]
    });
