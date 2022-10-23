import { configureStore } from "@reduxjs/toolkit";
import drowerModalSliceReducer from "./ModalsDrowerSlice"
import  disabler  from "./disablerButtonsSlice";


export const store = configureStore({
    reducer: {
        drowerModalSlice: drowerModalSliceReducer,
        disabler: disabler
    }

});


export default store
