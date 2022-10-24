import React from "react";
import "./SwapComponent.css";
import shuffle from "../../../Icons/shuffle.svg";
import { useState } from "react";
import SelectSearchComponent from "../SelectSearchComponent/SelectSearchComponent";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function SwapComponent() {

  
  const [myCurrency, setMyCurrency] = useState("");
  const [newCurrency, setNewCurrency] = useState("");

  return (
    <div className="Swap-component-main-container">
      <div className="Swap-component">
        <div className="Swap-component-header">
          <h3>Swap</h3>
        </div>
        <div className="Swap-component-body">
          <div className="Currency-input">
            <div className="Currency-input-title">
              <label>You Sell</label>
            </div>
            <div className="Currency-input-currency-input-row">
              <input
                onChange={(e) => {
                  let value = e.target.value;
                  if (
                    (/^\d+\.\d+$|^\d+$/.test(value) ||
                      value === "0." ||
                      value === "" ||
                      (value !== "." &&
                        value[value.length - 1] === "." &&
                        !myCurrency.includes(".")) ||
                      value.length < myCurrency.length) &&
                    value !== "00" &&
                    value !== "01" &&
                    value !== "02" &&
                    value !== "03" &&
                    value !== "04" &&
                    value !== "05" &&
                    value !== "06" &&
                    value !== "07" &&
                    value !== "08" &&
                    value !== "09"
                  ) {
                    setMyCurrency(value);
                  } else if (
                    value === "00" ||
                    value === "01" ||
                    value === "02" ||
                    value === "03" ||
                    value === "04" ||
                    value === "05" ||
                    value === "06" ||
                    value === "07" ||
                    value === "08" ||
                    value === "09"
                  ) {
                    setMyCurrency(`${myCurrency}.${value[value.length - 1]}`);
                  }
                }}
                inputMode="decimal"
                minLength="1"
                maxLength="79"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                pattern="^[0-9]*[.,]?[0-9]*$"
                type="text"
                placeholder="0"
                className="Currency-input-styled-input"
                value={myCurrency}
              ></input>
                <span 
                className="Currency-select-btn-inner">
                  <img
                    src="https://assets.coincap.io/assets/icons/eth@2x.png"
                    className="Currency-select-btn-token-icon"
                  ></img>
                
                    <SelectSearchComponent focus={()=> document.querySelectorAll(".select-search-select")[0].style.display = "block"} blur={()=>document.querySelectorAll(".select-search-select")[0].style.display = "none"} />
                  
                    <KeyboardArrowDownIcon className="arrow-near-select"/>

  
                </span>
            </div>
          </div>

          <div className="Swapper-center-row">
            <img src={shuffle} className="Swapper-styled-icon"></img>
          </div>

          <div className="Currency-input">
            <div className="Currency-input-title">
              <label>You Get</label>
            </div>
            <div className="Currency-input-currency-input-row">
              <input
                onChange={(e) => {
                  let value = e.target.value;
                  if (
                    (/^\d+\.\d+$|^\d+$/.test(value) ||
                      value === "0." ||
                      value === "" ||
                      (value !== "." &&
                        value[value.length - 1] === "." &&
                        !newCurrency.includes(".")) ||
                      value.length < newCurrency.length) &&
                    value !== "00" &&
                    value !== "01" &&
                    value !== "02" &&
                    value !== "03" &&
                    value !== "04" &&
                    value !== "05" &&
                    value !== "06" &&
                    value !== "07" &&
                    value !== "08" &&
                    value !== "09"
                  ) {
                    setNewCurrency(value);
                  } else if (
                    value === "00" ||
                    value === "01" ||
                    value === "02" ||
                    value === "03" ||
                    value === "04" ||
                    value === "05" ||
                    value === "06" ||
                    value === "07" ||
                    value === "08" ||
                    value === "09"
                  ) {
                    setNewCurrency(`${newCurrency}.${value[value.length - 1]}`);
                  }
                }}
                inputMode="decimal"
                minLength="1"
                maxLength="79"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                pattern="^[0-9]*[.,]?[0-9]*$"
                type="text"
                placeholder="0"
                className="Currency-input-styled-input"
                value={newCurrency}
              ></input>
                <span className="Currency-select-btn-inner">
                  <img
                    src="https://assets.coincap.io/assets/icons/eth@2x.png"
                    className="Currency-select-btn-token-icon"
                  ></img>
              
                    <SelectSearchComponent focus={()=> document.querySelectorAll(".select-search-select")[1].style.display = "block"} blur={()=>document.querySelectorAll(".select-search-select")[1].style.display = "none"}/>
                <KeyboardArrowDownIcon  className="arrow-near-select"/>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
