import React from "react";
import { useParams } from "react-router-dom";
import BlueBarForDetailsOfCoin from "./BlueBarForDetailsOfCoin/BlueBarForDetailsOfCoin";
import CoinDetailHiLowPrices from "./CoinDetailHiLowPrices/CoinDetailHiLowPrices";
import "./Asset.css";
import MainGraph from "./MainGraph";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../secrets";
import {
  setRank,
  setSymbol,
  setName,
  setPrice,
  setMarketCap,
  setVolume,
  setSupply,
  setWebsite,
  setIconUrl,
  setChange,
  setHigh,
  setLow,
  setAverage,
} from "../../store/BlueBarAssets";
import { useEffect } from "react";

const AssetID = () => {
  const { assetIdentificator } = useParams();
  const timePeriod = "5y";
  const rangeSelectorEnabler = true;

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://api.coinranking.com/v2/coin/${assetIdentificator}`, {
      method: "GET",
      headers: {
        "x-access-token": API_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const coin = data.data.coin;
        dispatch(setRank(coin.rank));
        dispatch(setSymbol(coin.symbol));
        dispatch(setName(coin.name));
        dispatch(setPrice(Number(coin.price).toFixed(3)));
        const marketCap =
          coin.marketCap > 1000000000
            ? `${(coin.marketCap / 1000000000).toFixed(3)}b`
            : `${(coin.marketCap / 1000000).toFixed(3)}m`;
        dispatch(setMarketCap(marketCap));
        const volume =
          coin["24hVolume"] > 1000000000
            ? `${(coin["24hVolume"] / 1000000000).toFixed(3)}b`
            : `${(coin["24hVolume"] / 1000000).toFixed(3)}m`;
        dispatch(setVolume(volume));
        const supply =
          coin.supply.total > 1000000000
            ? `${(coin.supply.total / 1000000000).toFixed(3)}b`
            : `${(coin.supply.total / 1000000).toFixed(3)}m`;
        dispatch(setSupply(supply));
        dispatch(setWebsite(coin.websiteUrl));
        dispatch(setIconUrl(coin.iconUrl));
        dispatch(setChange(coin.change));
        const max = Math.max(...coin.sparkline);
        dispatch(setHigh(max.toFixed(2)));
        const min = Math.min(...coin.sparkline);
        dispatch(setLow(min.toFixed(2)));
        dispatch(setAverage(((max + min) / 2).toFixed(2)));
      })
      .catch((err) => console.log("Hmmm... something went wrong"));
  }, [assetIdentificator]);

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
