import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchCoins: [],
//   requestFulfilled: false,
};

const fetchSlice = createSlice({
  name: "fetchSlice",
  initialState,
  reducers: {
    addToFetchSlice(state, action) {
      state.fetchCoins = action.payload;
    //   state.requestFulfilled = true;
    },
  },
});

export const { addToFetchSlice } = fetchSlice.actions;
export default fetchSlice.reducer;
