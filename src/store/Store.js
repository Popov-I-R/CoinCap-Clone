import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"
import  disabler  from "./IsLoginSlice";
import swaper from "./SwapSlice";
// import watchlistReducer from "./WatchlistReducer";

export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer,
        disabler: disabler,
        swaper: swaper,
        
        // watchlist: watchlistReducer
    }

});


export default store;
