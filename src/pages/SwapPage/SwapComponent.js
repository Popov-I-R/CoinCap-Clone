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
  setMyBalance,
  setRateFirstCoin,
  setRateSecondCoin,
  setRate,
} from "../../store/SwapSlice";
import { PrivacyTipOutlined } from "@mui/icons-material";

export default function SwapComponent() {
  const isLogin = useSelector((state) => state.disabler.isLogin);
  const firstCoinIcon = useSelector((state) => state.swaper.firstCoinIconUrl);
  const secondCoinIcon = useSelector((state) => state.swaper.secondCoinIconUrl);
  const myBalance = useSelector((state) => state.swaper.myBalance);
  const rateFirstCoin = useSelector((state) => state.swaper.rateFirstCoin);
  const rateSecondCoin = useSelector((state) => state.swaper.rateSecondCoin);
  const rate = useSelector((state) => state.swaper.rate);
  const [rateDisplayd, setRateDisplayd] = useState("none");

  const dispatch = useDispatch();

  const checkRateDisplayd = () => {
    // if(rateFirstCoin.length > 0 && rateSecondCoin.length > 0){
    //   dispatch(setRateDisplayd("block"))
    // }
    console.log(rateFirstCoin.length, rateSecondCoin.length);
  };

  // const newRate = (PrivacyTipOutlined)

  return (
    <div className="Swap-component">
      <div className="Swap-component-header">
        <h3>Swap</h3>
      </div>
      <div className="Swap-component-body">
        <div className="Currency-input">
          <div className="Currency-input-title">
            <label>You Sell</label>
            <label>
              Your balance: {myBalance} {rateFirstCoin}
            </label>
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
                // changeRate={(price)=>newRate(price)}
                changeRateCoin={(symbol) => dispatch(setRateFirstCoin(symbol))}
                checkRateDisplayd={checkRateDisplayd}
              />
            </span>
          </div>
        </div>

        <div className="Swapper-center-row">
          <img src={shuffle} className="Swapper-styled-icon"></img>
          <h4 style={{ display: rateDisplayd }} className="rateH4">
            1<p>{rateFirstCoin}</p> = {rate}
            <p>{rateSecondCoin}</p>
          </h4>
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
                changeMyBalance={() => dispatch(setMyBalance(myBalance))}
                // changeRate={(price)=>newRate(price)}
                changeRateCoin={(symbol) => dispatch(setRateSecondCoin(symbol))}
                checkRateDisplayd={checkRateDisplayd}
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
