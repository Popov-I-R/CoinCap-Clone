import React, { useState } from "react";
import PieChart from "./PieChart";
import "../HomePage/Home.css";
import "./MainWrapper.css";
import BoxSx from "./BoxComponent";
import "./PortfolioOverview.css";
import ModalComponent from "./ModalComponent";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Portfolio() {
  const myBalance = useSelector((state) => state.portfolio.myPortfolioBalance);
  const [activeBalance, setActiveBalance] = useState([]);

  useEffect(() => {
    const objToArray = Object.entries(myBalance);

    objToArray.unshift(["Task", "Hours per Day"]);
    setActiveBalance(objToArray);
  }, [myBalance]);
  
  
  return (
    <div className="MainWrapperPortfolioPage">
      <div className="PortfolioSection">
        <div className="PortfolioBoxSection">
          <BoxSx></BoxSx>
        </div>
        <ModalComponent></ModalComponent>
      </div>
      <PieChart data={activeBalance} />
    </div>
  );
}
