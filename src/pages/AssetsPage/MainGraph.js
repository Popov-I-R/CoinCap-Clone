import React from "react";
import { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import getHistory from "../../hooks/getHistory";
import axios from "../../apis/coinranking";


function MainGraph(props) {
  
  const symbol = props.symbol;
  const [history, error, loading] = getHistory({
    axiosInstance: axios,
    method: `GET`,
    url: `coin/${props.uuid}/history?timePeriod=${props.timePeriod}`,
  });

  let data = [];
  for (const key of history) {
    let coinStats = [key.timestamp * 1000, Number(key.price)];
    data.unshift(coinStats);
  }

  const options = {
    // xAxis: {
    //   minRange: 1
    // },
    time: {
      useUTC: false
  },
    rangeSelector: {
      enabled: props.rangeSelectorEnabler,
      allButtonsEnabled: true,
      inputEnabled: false,
      buttons: [
        {
          type: "hour",
          count: 1,
          text: "1h",
          events: {
            click: function () {
              alert("Clicked button test");
            },
          },
        },
        {
          type: "hour",
          count: 3,
          text: "3h",
        },
        {
          type: "hour",
          count: 12,
          text: "12h",
        },
        {
          type: "hour",
          count: 24,
          text: "24h",
        },
        {
          type: "day",
          count: 7,
          text: "7d",
        },
        {
          type: "day",
          count: 30,
          text: "30d",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "year",
          count: 1,
          text: "1y",
        },
        {
          type: "year",
          count: 3,
          text: "3y",
        },
        {
          type: "year",
          count: 5,
          text: "5y",
        },

        {
          type: "ytd",
          text: "YTD",
        },
        {
          type: "all",
          text: "All",
        },
      ],
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
      {/* <div id="message">{appState.status}</div> */}
    </div>
  );
}

export default MainGraph;
