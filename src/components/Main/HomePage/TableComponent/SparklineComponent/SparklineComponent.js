import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

export default function SparkLine(props) {
  function isPositive(props) {
    if (props.change >= 0) {
      return (
        <Sparklines data={props.data} width={150} height={50}>
          <SparklinesLine
            style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "green" }}
          />
          <SparklinesSpots />
        </Sparklines>
      );
    } else {
      return (
        <Sparklines data={props.data} width={150} height={50}>
          <SparklinesLine
            style={{ stroke: "#f90000", strokeWidth: "1", fill: "red" }}
          />
          <SparklinesSpots />
        </Sparklines>
      );
    }
  }

  return <div className="sparkContainer">
          {isPositive(props)}
        </div>;
}
