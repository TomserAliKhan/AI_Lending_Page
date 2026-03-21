import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import leftReducre  from "./leftSlice";
import rightReducre  from "./rightSlice";

export const store=configureStore({
    reducer:{
        auth:authReducer,
        leftHum:leftReducre,
        rightHum:rightReducre
    }
})