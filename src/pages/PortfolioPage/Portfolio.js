import React from "react";
import PieChart from "./PieChart";
import "../HomePage/Home.css"

export default function Portfolio() {
  // Да се конвертира в кеш
  const myAssets = [
    ["Task", "Hours per Day"],
    ["ETH", 11],
    ["ADA", 2],
    ["BNB", 2],
    ["BTC", 3.2],
  ];


  return (
    <div >
      <PieChart data={myAssets}/>
    </div>
  );
}

