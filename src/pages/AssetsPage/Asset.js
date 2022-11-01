import React from "react";
import { useParams } from "react-router-dom";
import BlueBarForDetailsOfCoin from "./BlueBarForDetailsOfCoin/BlueBarForDetailsOfCoin";
import CoinDetailHiLowPrices from "./CoinDetailHiLowPrices/CoinDetailHiLowPrices";
import "./Asset.css";

import MainGraph from "./MainGraph";
import SwapComponent from "../SwapPage/SwapComponent";

const AssetID = () => {
  const { assetIdentificator } = useParams();
  const timePeriod = "5y";
  const rangeSelectorEnabler = true;
  return (
    <div>
      <BlueBarForDetailsOfCoin></BlueBarForDetailsOfCoin>
      <div className="Assets-page">
        <CoinDetailHiLowPrices />
        <MainGraph
          uuid={assetIdentificator}
          rangeSelectorEnabler={rangeSelectorEnabler}
          timePeriod={timePeriod}
        >
          {" "}
        </MainGraph>
      </div>
    </div>
  );
};
export default AssetID;
