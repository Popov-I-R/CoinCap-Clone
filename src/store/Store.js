import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"
import  disabler  from "./IsLoginSlice";
import swaper from "./SwapSlice";
import watchlistSlice from "./WatchlistReducer";
import fetchSlice from "./FetchSlice";
import socketSlice from "./WebSocketSlice";

export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer,
        disabler: disabler,
        swaper: swaper,
        watchlistSlice: watchlistSlice,
        fetchSlice: fetchSlice,
        // socketSlice: socketSlice,
    }
});


export default store;
