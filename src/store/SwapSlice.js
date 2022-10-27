import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import defaultIconUrl from "../components/Icons/QuestionCoin.png";

const initialState = {
  allCoins: [],
  firstCoinIconUrl: defaultIconUrl,
  secondCoinIconUrl: defaultIconUrl,
  myBalance: 0,
  rateFirstCoin: "",
  rateSecondCoin: "",
  rate: 0,
};

export const coinsForSwapSlice = createSlice({
  name: "swaper",
  initialState,
  reducers: {
    setFirstCoinIconUrl: (state, action) => {
      state.firstCoinIconUrl = action.payload;
    },
    setSecondCoinIconUrl: (state, action) => {
      state.secondCoinIconUrl = action.payload;
    },
    setMyBalance: (state, action) => {
      state.myBalance = action.payload;
    },
    setRateFirstCoin: (state, action) => {
      state.rateFirstCoin = action.payload;
    },
    setRateSecondCoin: (state, action) => {
      state.rateSecondCoin = action.payload;
    },
    setRate: (state, action) => {
      state.rate = action.payload;
    },
  },
});

export const {
  setFirstCoinIconUrl,
  setSecondCoinIconUrl,
  setMyBalance,
  setRateFirstCoin,
  setRateSecondCoin,
  setRate,
} = coinsForSwapSlice.actions;
export default coinsForSwapSlice.reducer;
