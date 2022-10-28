import React from "react";
import MainTable from "../HomePage/TableComponent/TableComponent";
import BlueBarAdaptive from "../HomePage/BlueBarUnderHeader/BlueBarAdaptive";
import "../HomePage/Home.css";
import useAxios from "../../AxiosHooks/getCoins";
import axios from "../../apis/coinranking";
import { useSelector } from "react-redux";

export default function Watchlist() {
  const watchlist = useSelector((state) => state.watchlistSlice.watchlist);

  function FetchCoins() {
    const [coins, error, loading] = useAxios({
      axiosInstance: axios,
      method: `GET`,
      url: `coins?`,
      requestConfig: {
        params: {
          timePeriod: "24h",
          orderBy: "marketCap",
          orderDirection: "desc",
          offset: "0",
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          uuids: `${watchlist}`,
        },
      },
    });
    return [coins, error, loading];
  }

  return (
    <>
      <BlueBarAdaptive
        // marketCap={"$1.12T"}
        // exchangeVol={"$37.37B"}
        // assets={"2,295"}
        // exchanges={"73"}
        // markets={"13,793"}
        // btcDomIndex={"32.8%"}
      />
      <div className="MainWrapper">
        <MainTable FetchCoins={FetchCoins}></MainTable>
      </div>
    </>
  );
}
