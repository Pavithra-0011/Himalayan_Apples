import axios from 'axios'
import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'

const ConfirmOrder = createAsyncThunk(
        'user/Postdata',
         async(setDetails,{isRejectedWithValue}) =>
        {
            try{
                const response = await axios.post('https://660fa0a3356b87a55c51d8db.mockapi.io/users',setDetails)
                console.log("Posted Sucessfully")
                return response.data
            }
            catch(error) 
            {
               console.log("Not sucessful")
               return isRejectedWithValue(error.response.data)
            }
        }
)
export default ConfirmOrder;