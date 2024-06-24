import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
const initialState = []


const productSlice = createSlice({

        name:"product",
        initialState,
        reducers:{
            addProduct(state, action){
                state.push(action.payload)
            },
            removeProduct(state, action ){
                return state.filter((product) => product.id != action.payload.id)
            }
        }
})

export const {addProduct, removeProduct} = productSlice.actions

export default productSlice.reducer