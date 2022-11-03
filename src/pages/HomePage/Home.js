import React, { useState } from "react";
import { useEffect } from "react";
import BlueBarAdaptive from "./BlueBarUnderHeader/BlueBarAdaptive";
import "./Home.css";
import MainTable from "./TableComponent/TableComponent";
import getCoins from "../../axiosHooks/getCoins";
import axios from "../../apis/coinranking";
import { Button } from "@mui/material";
import MainGreenButton from "../../components/MainGreenButton";
import { addToFetchSlice } from "../../store/FetchSlice";

import { API_KEY } from "../../secrets";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {

  let fetchedCoins = useSelector((state) => state.fetchSlice.fetchCoins);
  const dispatch = useDispatch();

  let [initLimitCoins, setInitLimitCoins] = useState(20);

  function FetchCoins() {
    const coinsLimit = 20;
    const [coins, error, loading] = getCoins({
      axiosInstance: axios,
      method: `GET`,
      url: `coins?`,
      requestConfig: {
        params: {
          limit: coinsLimit,
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

  function handleData() {
    setInitLimitCoins(initLimitCoins += 20)

    let limit = initLimitCoins
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '30027b2007mshd40995eb9b5a54ap1361c1jsncf2e7eda5150',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    fetch(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${initLimitCoins}&offset=0`, options)
      .then(response => response.json())
      .then(response => {
        let getNeededData = response.data.coins.map(coin => {
          if (coin.price) {
            coin.price = +coin.price
          } if(coin.marketCap) {
            coin.marketCap = +coin.marketCap
          } 
            if(coin.change) {
              coin.change = +coin.change
            }
          return coin
        })

        dispatch(addToFetchSlice(getNeededData))
      }


        )
      .catch(err => console.error(err));

  }

  return (
    <>
      <BlueBarAdaptive />
      <div className="MainWrapper">
        <MainTable FetchCoins={FetchCoins} />
      </div>
      <MainGreenButton text={"Load More"} function={handleData}>
      </MainGreenButton>
      {/* <TestSocketTwo></TestSocketTwo> */}
    </>
  );
}
