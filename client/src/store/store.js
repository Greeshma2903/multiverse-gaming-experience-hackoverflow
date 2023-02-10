import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./authSlice";
import { funReducers } from "./funtopiaSlice";
import { uiReducers } from "./uiSlice";

const store = configureStore({
    reducer: {
        auth: authReducers,
        ui: uiReducers, 
        fun: funReducers
    }
})

export default store;   