import { createSlice } from '@reduxjs/toolkit'

// const watchlistSlice = createSlice({
//   name: 'watchlist',
//   initialState: localStorage.getItem("actualUser").assets,
//   reducers: {
//     addToWatchlist(state, action) {
      
//     },
//     removeFromWatchlist(state, action) {
//       const coin = state.find(coin => coin.id === action.payload)
//       coin.completed = !coin.completed
//     }
//   }
// })

// export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions
// export default watchlistSlice.reducer