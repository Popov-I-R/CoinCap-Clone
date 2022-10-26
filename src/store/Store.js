import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"
import  disabler  from "./IsLoginSlice";
import watchlistReducer from "./WatchlistReducer";
import swapSlice from "./SwapSlice";

export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer,
        disabler: disabler,
        watchlist: watchlistReducer,
        swaper: swapSlice,
    }

});


export default store;
