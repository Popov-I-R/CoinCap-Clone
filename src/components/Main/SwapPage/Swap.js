import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
// import Container from "./testHighChart2";
// import PieTEst from "./PieTEst";
import LineFour from "./testLineFour";
import { GetRequestHooks } from "./testRequests";

export default function Swap() {
  const options = {
    title: {
      text: "My stock chart",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
      {/* <Container></Container> */}
      {/* <PieTEst></PieTEst> */}
      <LineFour></LineFour>
      <GetRequestHooks></GetRequestHooks>
    </div>
  );
}
