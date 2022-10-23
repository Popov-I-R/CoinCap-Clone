import React from "react";
import "./SwapComponent.css";
import shuffle from "../../Icons/shuffle.svg";
import { useState } from "react";



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
              <button className="Currency-select-token-btn">
                <span className="Currency-select-btn-inner">
                  <img
                    src="https://assets.coincap.io/assets/icons/eth@2x.png"
                    className="Currency-select-btn-token-icon"
                  ></img>
                  <div className="Search-select-box">
                    

                  </div>
                </span>
              </button>
            </div>
          </div>

          <div className="Swapper-center-row">
            <img src={shuffle} className="Swapper-styled-icon"></img>
          </div>

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
              <button className="Currency-select-token-btn">
                <span className="Currency-select-btn-inner">
                  <img
                    src="https://assets.coincap.io/assets/icons/eth@2x.png"
                    className="Currency-select-btn-token-icon"
                  ></img>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
