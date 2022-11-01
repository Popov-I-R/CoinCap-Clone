import React from "react";
import "./InputSearch.css";
import { API_KEY } from "../../../secrets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
  setAverage
} from "../../../store/BlueBarAssets";

export default function InputSearch() {
  const [searchedCoins, setSearchedCoins] = useState([]);
  const [isOptionDisplayed, setIsOptionDisplayed] = useState("none");
  const dispatch = useDispatch();

  function updateBlueBarData(uuid) {
    fetch(`https://api.coinranking.com/v2/coin/${uuid}`, {
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
        dispatch(setAverage(((max+min)/2).toFixed(2)));
      })
      .catch((err) => console.log("Hmmm... something went wrong"));
  }

  function debounce(func, time) {
    let timerID;
    return function (event) {
      clearTimeout(timerID);
      timerID = setTimeout(func, time, event);
    };
  }

  let debounceHandler = debounce(myFunc, 1000);

  function myFunc(e) {
    const value = e.target.value;
    if (value !== "") {
      fetch(
        `https://api.coinranking.com/v2/search-suggestions?query=${value}`,
        {
          method: "GET",
          headers: {
            "x-access-token": API_KEY,
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const coins = data.data.coins;
          setSearchedCoins(coins);
          setIsOptionDisplayed("flex");
        });
    } else {
      setSearchedCoins([]);
    }
  }

  return (
    <div className="Nav-item InputSearch" style={{ margin: "0px" }}>
      <div className="search-field-container">
        <input
          autoComplete="off"
          onFocus={(e) => {
            let container = e.target.parentElement;
            setIsOptionDisplayed("flex");
            container.classList.add("focused");
          }}
          onBlur={(e) => {
            let container = e.target.parentElement;
            setTimeout(() => {
              setIsOptionDisplayed("none");
              container.classList.remove("focused");
            }, 200);
          }}
          onInput={debounceHandler}
          className="Search-text"
          type="text"
          placeholder="Search.."
          name="search"
        ></input>
        <a className="Search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </div>
      <div
        style={{ display: isOptionDisplayed }}
        className="search-options-box"
      >
        {searchedCoins.map((coin) => (
          <Link
            key={coin.uuid}
            to={`assets/${coin.uuid}`}
            className="searched-option-link"
            onClick={() => updateBlueBarData(coin.uuid)}
          >
            {coin.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
