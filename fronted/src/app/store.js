import { configureStore } from "@reduxjs/toolkit";
import foodreducer from '../features/food/foodSlice'
import authreducer from '../features/auth/authSlice'
import cartreducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        food: foodreducer,
        auth: authreducer,
        cart: cartreducer
    }
})