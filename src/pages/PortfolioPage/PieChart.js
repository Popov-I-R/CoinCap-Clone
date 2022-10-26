import React from "react";
import { Chart } from "react-google-charts";

export default function PieChart(props) {
  const options = {
    title: "My Assets",
    is3D: true,
    sliceVisibilityThreshold: .00000000000000001
  };

  return (
    <Chart
      chartType="PieChart"
      data={props.data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
