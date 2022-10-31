import React from "react";
import { useEffect } from "react";
import BlueBarAdaptive from "./BlueBarUnderHeader/BlueBarAdaptive";
import "./Home.css";
import MainTable from "./TableComponent/TableComponent";
import getCoins from "../../AxiosHooks/getCoins";
import axios from "../../apis/coinranking";
import { API_KEY } from "../../secrets";

import { useDispatch, useSelector } from "react-redux";
import { addToFetchSlice } from "../../store/FetchSlice";
// import { addSocketData } from "../../store/WebSocketSlice";

export default function Home() {
  

  function FetchCoins() {
    const coinsLimit = 25;
    const [coins, error, loading] = getCoins({
      axiosInstance: axios,
      method: `GET`,
      url: `coins?`,
      requestConfig: {
        params: {
          limit: `${coinsLimit}`,
          timePeriod: "24h",
          orderBy: "marketCap",
          orderDirection: "desc",
          offset: "0",
          referenceCurrencyUuid: "yhjMzLPhuIDl",
        },
      },
    });
   
    return [coins, error, loading];
  }

  return (
    <>
      <BlueBarAdaptive />
      <div className="MainWrapper">
        <MainTable FetchCoins={FetchCoins} />
      </div>
    </>
  );
}
