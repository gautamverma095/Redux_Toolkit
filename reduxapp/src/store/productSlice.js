import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

const productSliceReducer = createSlice({

    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    // reducers: {
    //     setProducts(state, action) {
    //         state.data = action.payload

    //     },
    //     setStatus(state, action) {
    //         state.status = action.payload
    //     }

    // }
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING
            
            }).addCase(fetchProducts.fulfilled, (state, action) => {
                
                state.data = action.payload
                state.status =STATUSES.IDLE
            
            }).addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR

            })
    }


})

export const { setProducts, setStatus } = productSliceReducer.actions

export default productSliceReducer.reducer


// thunk



export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
//    return await fetch("https://fakestoreapi.com/products").then((res) =>

//             res.json())
//             .then((res) => {

// return res
//             })
    
})
// export function fetchProducts() {
 

//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         // const prop = getState()

//         await fetch("https://fakestoreapi.com/products").then((res) =>

//             res.json())
//             .then((res) => {


//                 dispatch(setProducts(res))
//                 dispatch(setStatus(STATUSES.IDLE))
//             }).catch((err) => {
//                 console.log(err);
//                 dispatch(setStatus(STATUSES.ERROR))
//             })

//     }
// } 