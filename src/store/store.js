import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cartSlice"
import authReducer from "../features/authslice"


const store = configureStore({
    reducer: {
        cart : cartReducer,
        auth : authReducer
    } 
})

export default store