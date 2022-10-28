import React from "react";
import { useEffect } from "react";
import BlueBarAdaptive from "./BlueBarUnderHeader/BlueBarAdaptive";
import "./Home.css"
import MainTable from "./TableComponent/TableComponent";
import getCoins from "../../AxiosHooks/getCoins";
import axios from "../../apis/coinranking";

export default function Home() {
//   function numberWithSpaces(x) {
//     var parts = x.toString().split(".");
//     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
//     return parts.join(".");
// }

  function FetchCoins() {
    const coinsLimit = 25;
    const [coins, error, loading] = getCoins({
      axiosInstance: axios,
      method: `GET`,
      url: `coins?`,
      requestConfig: {
        params: {
          "limit" : `${coinsLimit}`,
          "timePeriod" : "24h",
          "orderBy" : "marketCap",
          "orderDirection" : "desc",
          "offset" : "0",
          "referenceCurrencyUuid" : "yhjMzLPhuIDl",
        }
      }
    })
    return [coins ,error, loading];
  }

  return (
    <>
      <BlueBarAdaptive/>
      <div className="MainWrapper" >
        <MainTable FetchCoins={FetchCoins}/>
      </div>
      
    </>
  );
}
