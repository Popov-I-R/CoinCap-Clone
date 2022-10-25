import React from "react";
import { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

let symbol = "BTC";

let dataUrl =
  "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=5y";

function MainGraph() {
  const [appState, setAppState] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    let arr = [];

    const optionsReq = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "30027b2007mshd40995eb9b5a54ap1361c1jsncf2e7eda5150",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

    fetch(dataUrl,optionsReq)
      .then((res) => res.json())
      .then((data) => {
        for (const key of data.data.history) {
          let data = [key.timestamp * 1000, Number(key.price)];
          arr.unshift(data);
        }
        setAppState({ loading: false, data: arr });
      });
  }, [setAppState]);

  let data = appState.data;

  const options = {
    xAxis: {
      minRange: 1
    },
    rangeSelector:{
        enabled: true,
        allButtonsEnabled: true,
        inputEnabled: false,
        buttons: [{
            type: 'hour',
            count: 1,
            text: '1h',
            events: {
                click: function() {
                    alert('Clicked button test');
                }
            }
        }, {
            type: 'hour',
            count: 3,
            text: '3h'
        }, {
            type: 'hour',
            count: 12,
            text: '12h'
        },
        {
            type: 'hour',
            count: 24,
            text: '24h',
        },
        {
            type: 'day',
            count: 7,
            text: '7d'
        },
        {
            type: 'day',
            count: 30,
            text: '30d'
        },
        {
            type: 'month',
            count: 3,
            text: '3m'
        },
        {
            type: 'year',
            count: 1,
            text: '1y'
        },
        {
            type: 'year',
            count: 3,
            text: '3y'
        },
        {
            type: 'year',
            count: 5,
            text: '5y'
        },
        
        {
            type: 'ytd',
            text: 'YTD'
        },  {
            type: 'all',
            text: 'All'
        }]

    },
    chart: {
      backgroundColor: "white",
      type: "area",
    },

    title: {
      text: symbol,
      align: "left",
    },
    series: [
      {
        name: symbol,
        data: data,
        tooltip: {
          valueDecimals: 2,
        },
      }, 
    ],
  };

  return (
    <div id="container">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
      <div id="message">{appState.status}</div>
    </div>
  );
}

export default MainGraph;