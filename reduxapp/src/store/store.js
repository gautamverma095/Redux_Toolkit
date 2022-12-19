import { configureStore } from "@reduxjs/toolkit";

import cartSliceReducer from "./cartSlice"
import productSliceReducer from "./productSlice"


const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        product: productSliceReducer

    }


})

export default store