import React from "react";
import { render } from "react-dom";
// import Highcharts from "highstock-release";
import {
  HighchartsChart,

  XAxis,
  YAxis,
  Title,
  LineSeries,
  SplineSeries,
  PieSeries,
  Tooltip,
  Legend
} from "react-jsx-highcharts";

// import { Chart } from "react-jsx-highcharts";
import { Chart } from "highcharts";

export default function PieTEst() {
  

const dateFormat = {
  hour: "%l %p",
  day: "%b %e '%y",
  week: "%b %e '%y",
  month: "%b '%y",
  year: "%y"
};

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
let credits = {
  enabled: false
};
let title = {
  text: "tttitle"
};
let exporting = {
  enabled: false
};
let yAxis = [];
yAxis.push({
  title: {
    text: "ttitle"
  },
  opposite: false,
  min: 0,
  labels: {
    format: "{value}Wh"
  }
});
let xAxis = {
  type: "datetime",
  tickInterval: 4 * 3600 * 1000,
  dateTimeLabelFormats: {
    hour: "%l %p",
    day: "%b %e '%y",
    week: "%b %e '%y",
    month: "%b '%y",
    year: "%y"
  }
};
let legend = {
  enabled: false,
  layout: "vertical",
  align: "left",
  verticalAlign: "top",
  floating: true
};

let tooltip = {
  valueDecimals: 2,
  shared: true
};

let cchart = {
  type: "Spline",
  zoomType: "x",
  spacingBottom: 25,
  spacingTop: 10,
  spacingLeft: 20,
  spacingRight: 10,
  width: null,
  height: 480
};

const plotOptions = {
  pie: {
    // size: 120,
    allowPointSelect: true,
    cursor: "pointer",
    dataLabels: {
      enabled: true,
      format: "{point.name}: {point.percentage:.1f} %"
    },
    showInLegend: true
  },
  series: {
    dataLabels: {
      enabled: true
    },
    pointPadding: 0.1,
    groupPadding: 0,
    tooltip: {
      valuePrefix: "",
      valueSuffix: " millions"
    }
  }
};

const pieData = [
  {
    name: "Jane",
    y: 17
  },
  {
    name: "John",
    y: 13
  },
  {
    name: "Joe",
    y: 20
  },
  {
    name: "Ivan",
    y: 50
  }
];
  return (
    <HighchartsChart plotOptions={plotOptions}>
    {/* <Chart /> */}
    <Title>Return on investment</Title>

    <XAxis>
      <XAxis.Title>Time</XAxis.Title>
    </XAxis>
    <Legend />
    <Tooltip
      useHTML
      padding={12}
      borderRadius={4}
      borderColor="transparent"
      // formatter={formatTooltip}
    />

    <YAxis id="number">
      <YAxis.Title>Energy (kWh)</YAxis.Title>
      <PieSeries
        id="total-consumption"
        name="Total consumption"
        data={pieData}
        size={150}
        showInLegend
      />
    </YAxis>
  </HighchartsChart>
  )
}

