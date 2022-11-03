import { createSlice } from "@reduxjs/toolkit";
import defaultIconUrl from "../components/Icons/QuestionCoin.png";


const initialState = {
  rank: 0,
  name: "ExCoin",
  symbol: "EXN",
  price: 123,
  marketCap: "123.434b",
  volume: "789.784b",
  supply: "56.734m",
  website: "",
  iconUrl: defaultIconUrl,
  change: 0.05,
  high: 125,
  low: 121,
  average: 123,
  uuid: ""
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
    setUUID: (state, action) => {
      state.uuid = action.payload;
    }
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
  setAverage,
  setUUID
} = blueBarAssets.actions;
export default blueBarAssets.reducer;
