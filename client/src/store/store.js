import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./authSlice";
import { uiReducers } from "./uiSlice";

const store = configureStore({
    reducer: {
        auth: authReducers,
        ui: uiReducers
    }
})