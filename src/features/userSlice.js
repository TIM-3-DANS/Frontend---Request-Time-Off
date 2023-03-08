import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const userSlice = createSlice({
    name : "user",
    initialState:{
        name : "Halo, John Doe ",
        email : "Employee"
    },
    reducers:{
        update: (state, action)=>{
            state.name = action.payload.name;
        }
    }
})



export const {update} = userSlice.actions;
export default userSlice.reducer;