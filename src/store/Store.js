import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"
import  disabler  from "./IsLoginSlice";
import swaper from "./SwapSlice";
import watchlistSlice from "./WatchlistReducer";

export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer,
        disabler: disabler,
        swaper: swaper,
        watchlistSlice: watchlistSlice,
    }
});


export default store;
