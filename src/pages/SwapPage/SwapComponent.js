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
import {
  setFirstCoinIconUrl,
  setSecondCoinIconUrl,
  setMyBalance
} from "../../store/SwapSlice";

export default function SwapComponent() {
  const isLogin = useSelector((state) => state.disabler.isLogin);
  const firstCoinIcon = useSelector((state) => state.swaper.firstCoinIconUrl);
  const secondCoinIcon = useSelector((state) => state.swaper.secondCoinIconUrl);
  const myBalance = useSelector((state)=> state.swaper.myBalance);

  const dispatch = useDispatch();

  return (
    <div className="Swap-component">
      <div className="Swap-component-header">
        <h3>Swap</h3>
      </div>
      <div className="Swap-component-body">
        <div className="Currency-input">
          <div className="Currency-input-title">
            <label>You Sell</label>
            <label>Your balance: {myBalance}</label>
          </div>
          <div className="Currency-input-currency-input-row">
            <InputAmountForSwap />
            <span className="Currency-select-btn-inner">
              <img
                src={firstCoinIcon}
                className="Currency-select-btn-token-icon"
              ></img>

              <SelectSearchComponent
                changeCoinIcon={(url) => dispatch(setFirstCoinIconUrl(url))}
                changeMyBalance={(balance) => dispatch(setMyBalance(balance))}
              />
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
                src={secondCoinIcon}
                className="Currency-select-btn-token-icon"
              ></img>

              <SelectSearchComponent
                changeCoinIcon={(url) => dispatch(setSecondCoinIconUrl(url))}
                changeMyBalance={(balance) => dispatch(setMyBalance(myBalance))}
              />
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
