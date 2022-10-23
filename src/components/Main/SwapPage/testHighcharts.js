import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const options = {
  title: {
    text: 'My stock chart'
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ]
};

const test = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  </div>
);


// Highcharts.getJSON(
//     'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
//     function (data) {
  
//       Highcharts.chart('container', {
//         chart: {
//           zoomType: 'x'
//         },
//         title: {
//           text: 'USD to EUR exchange rate over time'
//         },
//         subtitle: {
//           text: document.ontouchstart === undefined ?
//             'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
//         },
//         xAxis: {
//           type: 'datetime'
//         },
//         yAxis: {
//           title: {
//             text: 'Exchange rate'
//           }
//         },
//         legend: {
//           enabled: false
//         },
//         plotOptions: {
//           area: {
//             fillColor: {
//               linearGradient: {
//                 x1: 0,
//                 y1: 0,
//                 x2: 0,
//                 y2: 1
//               },
//               stops: [
//                 [0, Highcharts.getOptions().colors[0]],
//                 [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//               ]
//             },
//             marker: {
//               radius: 2
//             },
//             lineWidth: 1,
//             states: {
//               hover: {
//                 lineWidth: 1
//               }
//             },
//             threshold: null
//           }
//         },
  
//         series: [{
//           type: 'area',
//           name: 'USD to EUR',
//           data: data
//         }]
//       });
//     }
//   );