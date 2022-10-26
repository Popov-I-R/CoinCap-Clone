// import { createSlice } from '@reduxjs/toolkit'
// import {getActiveUser} from "../server/server"
// // import {ADD_TO_WATCHLIST} from "../constants/watchlistConstant"

// // let initialState = {
// //     watchlist: []
// // }

// // if (localStorage.getItem("activeUser")) {
// //     const activeUser = getActiveUser()
// //     const watchlist = activeUser.watchlistIDs
// //     initialState.watchlist = watchlist
// // } else {
// //     initialState.watchlist = []
// // }

// // const watchlistReducer = (state=initialState, action ) => {
// //     switch (action.type) {
// //         case ADD_TO_WATCHLIST:
// //             return {
// //                 watchlist: [...action.payload]
// //             }
// //             default:
// //                 return state
// //     }
// // }

// // export default watchlistReducer

// const activeUser = getActiveUser()
// const initialState = activeUser.watchlistIDs


// const watchlistSlice = createSlice({
//   name: 'watchlist',
//   initialState,
//   reducers: {
//     addToWatchlist(state, action) {
//       state = [...state, action.payload]
//       activeUser.watchlistIDs = state
//       localStorage.setItem("activeUser",JSON.stringify(activeUser))
//     },
//     // removeFromWatchlist(state, action) {
//     //   const coin = state.find(coin => coin.id === action.payload)
//     //   coin.completed = !coin.completed
//     // }
//   }
// })

// export const { addToWatchlist } = watchlistSlice.actions
// export default watchlistSlice.reducer