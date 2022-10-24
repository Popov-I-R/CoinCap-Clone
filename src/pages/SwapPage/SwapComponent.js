import React from "react";
import "./SwapComponent.css";
import shuffle from "../../components/Icons/shuffle.svg";
import { useState } from "react";
import SelectSearchComponent from "./SelectSearchComponent/SelectSearchComponent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputAmountForSwap from "./InputOnlyNumberForSwap/InputAmountForSwap";
import ConnectWalletModal from "../../components/Header/ConnectWallet/ConnectWalletModal";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";


export default function SwapComponent() {
  const isLogin = useSelector((state) => state.disabler.isLogin);

  return (
    <div className="Swap-component">
      <div className="Swap-component-header">
        <h3>Swap</h3>
      </div>
      <div className="Swap-component-body">
        <div className="Currency-input">
          <div className="Currency-input-title">
            <label>You Sell</label>
            <label>Your balance: {"34.5783 ETH"}</label>
          </div>
          <div className="Currency-input-currency-input-row">
            <InputAmountForSwap />
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
            <InputAmountForSwap />
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
        <div className="Swap-button-container">
          {!isLogin ? (
          <ConnectWalletModal />
        ) : (
          <Button
            className="Swap-button"
            // onClick={()=>{swap()}}
            style={{
              borderRadius: 40,
              backgroundColor: "rgb(24, 198, 131)",
              padding: "7px 16px",
              fontSize: "20px",
              boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
              minWidth: "250px",
            }}
            variant="contained"
          >
            Swap now
          </Button>
        )}
        </div>
        
      </div>
    </div>
  );
}
