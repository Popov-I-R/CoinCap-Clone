import React, { useState } from "react";
import PieChart from "./PieChart";
import "../HomePage/Home.css";
import "./MainWrapper.css";
import BoxSx from "./BoxComponent";
import "./PortfolioOverview.css";
import ModalComponent from "./ModalComponent";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { API_KEY } from "../../secrets";

export default function Portfolio() {
  const myBalance = useSelector((state) => state.portfolio.myPortfolioBalance);
  const [activeBalance, setActiveBalance] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const keys = Object.keys(myBalance);
    const objToArray = Object.entries(myBalance);
    let sum = 0;
    let endPoint = "";
    keys.forEach((key, i) => {
      if (keys.length - 1 !== i) {
        endPoint += `symbols[]=${key}&`;
      } else {
        endPoint += `symbols[]=${key}`;
      }
    });

    fetch(`https://api.coinranking.com/v2/coins?${endPoint}`, {
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
        const coins = data.data.coins.filter((coin) => coin.price !== null);
        objToArray.map((coin, i) => {
          let currentCoin = coins.filter(coinObj => coinObj.symbol === coin[0])
          coin[1] = Number(coin[1]) * Number(currentCoin[0].price);
          sum += coin[1];
        })
        objToArray.unshift(["Task", "Hours per Day"]);
        setActiveBalance(objToArray);
        setTotal(sum);
      });
  }, [myBalance]);

  return (
    <div className="MainWrapperPortfolioPage">
      <div className="PortfolioSection">
        <div className="PortfolioBoxSection">
          <BoxSx total={total}></BoxSx>
        </div>
        <ModalComponent></ModalComponent>
      </div>
      <PieChart data={activeBalance} />
    </div>
  );
}
