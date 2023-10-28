import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:[]
}

const cartSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        addProductToStore: (state, action)=>{
            state.products.push(...action.payload)
        },


    }

})

export const { addProductToStore } = cartSlice.actions
export default cartSlice.reducer