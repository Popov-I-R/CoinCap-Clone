import React from "react";
import "./BlueBarAdaptive.css";
import DesktopBlueBar from "../BlueBarUnderHeader/DesktopVersion/DesktopBlueBar";
import MobileBlueBar from "../BlueBarUnderHeader/MobileVersion/MobileBlueBar";
import axios from "../../../apis/coinranking";
import useAxiosGlobal from "../../../AxiosHooks/getGlobalStats";

export default function BlueBarAdaptive() {

  const globalStats = (function GLOBAL() {
    const [stats, error, loading] = useAxiosGlobal({
      axiosInstance: axios,
      method: `GET`,
      url: `stats`,
      requestConfig: {
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
        },
      },
    });
    return [stats, error, loading];
  })();
  const [stats, error, loading] = globalStats;

  return (
    <div>
      <div className="Blue-desktop-bar-adaptive">
        <DesktopBlueBar
          marketCap={`$${Number(stats.totalMarketCap).toLocaleString(
            undefined,
            { minimumFractionDigits: 0, maximumFractionDigits: 1 }
          )}`}
          exchangeVol={String(stats.total24hVolume).slice(0, 2) + ` Billions`}
          assets={stats.totalCoins}
          exchanges={stats.totalExchanges}
          markets={stats.totalMarkets}
          btcDomIndex={`${Number(stats.btcDominance).toFixed(2)}%`}
        />
      </div>
      <div className="Blue-mobile-bar-adaptive">
        <MobileBlueBar
          marketCap={`$${Number(stats.totalMarketCap).toLocaleString(
            undefined,
            { minimumFractionDigits: 0, maximumFractionDigits: 1 }
          )}`}
          exchangeVol={String(stats.total24hVolume).slice(0, 2) + ` Billions`}
          assets={stats.totalCoins}
          exchanges={stats.totalExchanges}
          markets={stats.totalMarkets}
          btcDomIndex={`${Number(stats.btcDominance).toFixed(2)}%`}
        />
      </div>
    </div>
  );
}
