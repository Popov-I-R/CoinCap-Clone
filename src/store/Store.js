import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"
import  disabler  from "./IsLoginSlice";
import swaper from "./SwapSlice";
import watchlistSlice from "./WatchlistReducer";
import  blueBarAssets  from "./BlueBarAssets";
import fetchSlice from "./FetchSlice";
import socketSlice from "./WebSocketSlice";

export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer,
        disabler: disabler,
        swaper: swaper,
        watchlistSlice: watchlistSlice,
        blueBarAssets: blueBarAssets,
        fetchSlice: fetchSlice,
        // socketSlice: socketSlice,
    }
});


export default store;
