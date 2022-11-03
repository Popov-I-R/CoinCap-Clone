import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"
import  disabler  from "./IsLoginSlice";
import swaper from "./SwapSlice";
import watchlistSlice from "./WatchlistReducer";
import  blueBarAssets  from "./BlueBarAssets";
import fetchSlice from "./FetchSlice";
import socketSlice from "./WebSocketSlice";
import portfolioSlice from "./PortfolioSlice";

export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer,
        disabler: disabler,
        swaper: swaper,
        watchlistSlice: watchlistSlice,
        blueBarAssets: blueBarAssets,
        fetchSlice: fetchSlice,
        portfolio: portfolioSlice,
        // socketSlice: socketSlice,
    }
});


export default store;
