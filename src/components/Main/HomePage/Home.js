import React from "react";
import BlueBarAdaptive from "./BlueBarUnderHeader/BlueBarAdaptive";
import "./Home.css"
import MainTable from "./TableComponent/TableComponent";

export default function Home() {
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
      <div className="MainWrapper" >
        <MainTable />
      </div>
      
    </>
  );
}
