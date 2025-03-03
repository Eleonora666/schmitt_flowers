import { configureStore } from "@reduxjs/toolkit";
import userReduser from '../features/Features'

export const store = configureStore({
    reducer:{
        auth: userReduser,
    }
})