import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts:[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addTocart: (state, action)=>{
            const cartItem = {
                id: action.payload.id, 
                title: action.payload.title, 
                desc: action.payload.desc, 
                price: action.payload.price,
                mrp: action.payload.mrp,
                imageUrl: action.payload.imageUrl,
                seller: action.payload.seller
            }
            state.carts.push(cartItem)
        },

        removeItem: (state,action)=>{
            // state.carts = state.carts.filter((eachItem) => eachItem.id !== action.payload)

            const index = state.carts.findIndex(
                (cartItem) => cartItem.id === action.payload
            );
    
            let newCart = [...state.carts];
    
            if(index >= 0){
                newCart.splice(index, 1)
                state.carts = newCart
            }
            else{
                console.warn(`Cant remove product (id: ${action.payload.id}) as its not in basket!`)
            }
            

        }

    }

})

export const {addTocart, removeItem} = cartSlice.actions
export default cartSlice.reducer