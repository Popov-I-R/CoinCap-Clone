import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rank: 0,
  symbol: "BestCoin",
  price: 0,
  marketCap: 0,
  volume: 0,
  supply: 0,
  website: "",
};

export const blueBatAssets = createSlice({
  name: "blueBatAssets",
  initialState,
  reducers: {
    setRank: (state, action) => {
      state.rank = action.payload;
    },
    setSymbol: (state, action) => {
      state.symbol = action.payload;
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
  },
});

export const {
  setRank,
  setSymbol,
  setPrice,
  setMarketCap,
  setVolume,
  setSupply,
  setWebsite,
} = blueBatAssets.actions;
export default blueBatAssets.reducer;
