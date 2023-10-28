import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cartSlice"
import authReducer from "../features/authslice"
import productReducer from '../features/productSlice'


const store = configureStore({
    reducer: {
        cart : cartReducer,
        auth : authReducer,
        product : productReducer
    } 
})

export default store