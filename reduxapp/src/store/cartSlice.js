import { createSlice } from "@reduxjs/toolkit"

const initialState = []


const cartSliceReducer = createSlice({

    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
 
            state.push(action.payload)

        },
        remove(state, action) {
  
          return   state.filter((el) => {

                return el.id != action.payload
            })
        }
    }


})

export const { add, remove } = cartSliceReducer.actions

export default cartSliceReducer.reducer