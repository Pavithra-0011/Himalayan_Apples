import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import ConfirmOrder from '../Action/Order'

const initialState = {
    data: [],
    isLoading: false,
    value:null,
    error: null,
  };

const OrderSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers: (builder) =>
        builder
    .addCase(ConfirmOrder.pending, (state) =>{
        state.isLoading = true;
        state.error = false;
    })
    .addCase(ConfirmOrder.fulfilled, (state, {payload}) =>{
        state.isLoading = false;
        state.data = payload;
        state.error = false;
    })
    .addCase(ConfirmOrder.rejected, (state, {payload}) =>{
        state.isLoading = false;
        state.error = payload;
    })
})

export default OrderSlice.reducer