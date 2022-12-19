import { createSlice } from "@reduxjs/toolkit"

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING:"loading"
})

const productSliceReducer = createSlice({

    name: "product",
    initialState: {
        data: [],
        status:STATUSES.IDLE
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
            
        },
        setStatus(state, action) {
            state.status = action.payload
        }

    }


})

export const { setProducts, setStatus } = productSliceReducer.actions

export default productSliceReducer.reducer


// thunk

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))

        const prop = getState()
        
        await fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((res) => {
            console.log(res);
            
            dispatch(setProducts(res))
            dispatch(setStatus(STATUSES.IDLE))
        }).catch((err) => {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR ))
         })
        
    }
} 