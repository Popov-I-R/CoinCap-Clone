import React from "react";
import { Chart } from "react-google-charts";

export default function PieChart() {
  const data = [
    ["Task", "Hours per Day"],
    ["ETH", 11],
    ["ADA", 2],
    ["BNB", 2],
    ["BTC", 3.2]
  ];
  
  const options = {
    title: "My Assets",
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}