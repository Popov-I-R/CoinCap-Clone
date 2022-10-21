import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"


export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer
    }

});

