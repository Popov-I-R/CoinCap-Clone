import React from "react";
import "./SwapComponent.css";
import shuffle from "../../components/Icons/shuffle.svg";
import { useState } from "react";
import SelectSearchComponent from "./SelectSearchComponent/SelectSearchComponent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputAmountForSwap from "./InputOnlyNumberForSwap/InputAmountForSwap";

export default function SwapComponent() {
  // const [myCurrency, setMyCurrency] = useState("");
  // const [newCurrency, setNewCurrency] = useState("");

  return (
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
          <InputAmountForSwap currency={myCurrency} setCurrency={setMyCurrency}/>
            <span className="Currency-select-btn-inner">
              <img
                src="https://assets.coincap.io/assets/icons/eth@2x.png"
                className="Currency-select-btn-token-icon"
              ></img>

              <SelectSearchComponent
                focus={() =>
                  (document.querySelectorAll(
                    ".select-search-select"
                  )[0].style.display = "block")
                }
                blur={() =>
                  (document.querySelectorAll(
                    ".select-search-select"
                  )[0].style.display = "none")
                }
              />

              <KeyboardArrowDownIcon className="arrow-near-select" />
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
           <InputAmountForSwap currency={newCurrency} setCurrency={setNewCurrency}/>
            <span className="Currency-select-btn-inner">
              <img
                src="https://assets.coincap.io/assets/icons/eth@2x.png"
                className="Currency-select-btn-token-icon"
              ></img>

              <SelectSearchComponent
                focus={() =>
                  (document.querySelectorAll(
                    ".select-search-select"
                  )[1].style.display = "block")
                }
                blur={() =>
                  (document.querySelectorAll(
                    ".select-search-select"
                  )[1].style.display = "none")
                }
              />
              <KeyboardArrowDownIcon className="arrow-near-select" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
