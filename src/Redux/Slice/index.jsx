import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import PostData from '../Action/index'
import ConfirmOrder from '../Action/Order'

const initialState = {
    data: [],
    isLoading: false,
    value:null,
    error: null,
  };
const Userslice = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers: (builder) =>
        builder  
    .addCase(PostData.pending, (state) =>{
        state.isLoading = true;
        state.error = false;
    })
    .addCase(PostData.fulfilled, (state, {payload}) =>{
        state.isLoading = false;
        state.data = payload;
        state.error = false;
    })
    .addCase(PostData.rejected, (state, {payload}) =>{
        state.isLoading = false;
        state.error = payload;
    })
})

export default Userslice.reducer