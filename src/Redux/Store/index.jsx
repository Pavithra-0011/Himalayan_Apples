import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import Userslice from '../Slice/index'
import ConfirmOrder from '../Slice/order'

export const Store = configureStore({
    reducer : {
       PostSlice : Userslice,
       Order : ConfirmOrder
    }
})
