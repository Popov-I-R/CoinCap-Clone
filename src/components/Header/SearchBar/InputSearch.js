import React from "react";
import "./InputSearch.css";
import { API_KEY } from "../../../secrets";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function InputSearch() {
  //   <Link to={`assets/${props.row.uuid}`}>{props.row.name}</Link>;
  const [searchedCoins, setSearchedCoins] = useState([]);
  const [isOptionDisplayed, setIsOptionDisplayed] = useState("none");

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
            onClick={() => setSearchedCoins([])}
          >
            {coin.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
