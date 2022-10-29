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
      />
      <div className="MainWrapper">
        <MainTable FetchCoins={FetchCoins}></MainTable>
      </div>
    </>
  );
}
