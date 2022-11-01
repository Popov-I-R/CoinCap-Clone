import { createSlice } from "@reduxjs/toolkit";
import defaultIconUrl from "../components/Icons/QuestionCoin.png";


const initialState = {
  rank: 0,
  name: "AndDaka",
  symbol: "BestCoin",
  price: 0,
  marketCap: 0,
  volume: 0,
  supply: 0,
  website: "",
  iconUrl: defaultIconUrl,
  change: 0,
  high: 0,
  low: 0,
  average: 0,
};

export const blueBarAssets = createSlice({
  name: "blueBarAssets",
  initialState,
  reducers: {
    setRank: (state, action) => {
      state.rank = action.payload;
    },
    setSymbol: (state, action) => {
      state.symbol = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setMarketCap: (state, action) => {
      state.marketCap = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setSupply: (state, action) => {
      state.supply = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setIconUrl: (state, action) => {
      state.iconUrl = action.payload;
    },
    setChange: (state, action) => {
      state.change = action.payload;
    },
    setHigh: (state, action) => {
      state.high = action.payload;
    },
    setLow: (state, action) => {
      state.low = action.payload;
    },
    setAverage: (state, action) => {
      state.average = action.payload;
    },
  },
});

export const {
  setRank,
  setSymbol,
  setName,
  setPrice,
  setMarketCap,
  setVolume,
  setSupply,
  setWebsite,
  setIconUrl,
  setChange,
  setHigh,
  setLow,
  setAverage
} = blueBarAssets.actions;
export default blueBarAssets.reducer;
