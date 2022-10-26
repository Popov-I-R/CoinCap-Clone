import React from "react";
import PieChart from "./PieChart";
import "../HomePage/Home.css"

export default function Portfolio() {
  // Да се конвертира в кеш
  const myAssets = [
    ["Task", "Hours per Day"],
    ["ETH", (11 * 1200)],
    ["ADA", (2 * 0.40)],
    ["BNB", (2 * 130)],
    ["BTC", (1 * 1000)],
  ];


  return (
    <div >
      <PieChart data={myAssets}/>
    </div>
  );
}

