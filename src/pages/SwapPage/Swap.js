import React from "react";
import SwapComponent from "./SwapComponent";
import "./Swap.css"
import BlueBarForDetailsOfCoin from "../HomePage/BlueBarForDetailsOfCoin/BlueBarForDetailsOfCoin";

export default function Swap() {


  return (
    <div>
      <BlueBarForDetailsOfCoin />
      <div className="Swap-component-main-container">
        <SwapComponent />
      </div>
    </div>
  );
}
