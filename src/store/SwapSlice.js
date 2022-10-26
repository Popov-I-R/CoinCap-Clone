import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import defaultIconUrl from "../components/Icons/QuestionCoin.png"


const initialState = {
  allCoins: [],
  firstCoinIconUrl: defaultIconUrl,
  secondCoinIconUrl: defaultIconUrl,
  myBalance: 0
};


// fetch("https://api.coinranking.com/v2/coins?limit=10", {
//   method: "GET",
//   headers: {
//     "x-access-token":
//       "coinrankingf8578fd99a951143edc7ee38782623b8b680181be6137259",
//   },
// })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then((coins) => {
//     initialState.allCoins.push(coins)
//   })
//   .catch(()=>{
//     alert("wrong request")
//   })
//   .finally(()=>{
//     console.log(initialState.allCoins)
//   })

export const coinsForSwapSlice = createSlice({
  name: "conditionDrowerAndModals",
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
    }
  },
});

export const { setFirstCoinIconUrl, setSecondCoinIconUrl, setMyBalance } = coinsForSwapSlice.actions;
export default coinsForSwapSlice.reducer;
