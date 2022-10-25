import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"
import  disabler  from "./disablerButtonsSlice";

import watchlistReducer from "./disablerButtonsSlice";

export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer,
        disabler: disabler,
        watchlist: watchlistReducer
    }

});


export default store
