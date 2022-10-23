import React from "react";
import BlueBarAdaptive from "../HomePage/BlueBarUnderHeader/BlueBarAdaptive";
import ExchangesTable from "./TableComponent/TableComponent";
import "../HomePage/Home.css"

export default function Exchanges() {
  return (
    <>
      <BlueBarAdaptive
        marketCap={"$1.12T"}
        exchangeVol={"$37.37B"}
        assets={"2,295"}
        exchanges={"73"}
        markets={"13,793"}
        btcDomIndex={"32.8%"}
      />
      <div className="MainWrapper">
        <ExchangesTable/>
      </div>
    </>
  );
}
