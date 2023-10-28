import cartReducer from "../features/cartSlice"
import authUserReducer from "../features/authslice"

export const reducer = {
    cart: cartReducer,
    auth: authUserReducer
}