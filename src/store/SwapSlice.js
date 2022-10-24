import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  allCoins: [],
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

// export const coinsForSwapSlice = createSlice({
//   name: "conditionDrowerAndModals",
//   initialState,
//   reducers: {
//     setWalletModalOpen: (state) => {
//       state.walletModalOpen = !state.walletModalOpen;
//     },
//   },
// });

// export const { setWalletModalOpen } = drowerModalSlice.actions;
// export default drowerModalSlice.reducer;
