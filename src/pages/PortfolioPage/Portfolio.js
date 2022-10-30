import React from "react";
import PieChart from "./PieChart";
import "../HomePage/Home.css";
import "./MainWrapper.css";
import BoxSx from "./BoxComponent";
import "./PortfolioOverview.css";
import ModalComponent from "./ModalComponent";

export default function Portfolio() {
  const myAssets = [
    ["Task", "Hours per Day"],
    ["ETH", 11 * 1200],
    ["ADA", 2 * 0.4],
    ["BNB", 2 * 130],
    ["BTC", 1 * 1000],
  ];

  return (
    <div className="MainWrapperPortfolioPage">
      <div className="PortfolioSection">
        <div className="PortfolioBoxSection">
          <BoxSx></BoxSx>
        </div>
        <ModalComponent></ModalComponent>
      </div>

      <PieChart data={myAssets} />
    </div>
  );
}
