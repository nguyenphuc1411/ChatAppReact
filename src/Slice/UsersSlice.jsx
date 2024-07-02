import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios"
export const getUserInfo = createAsyncThunk(
    "users/getProfile",
    async () => {
        const response = await axios.get("auth/userinfo")
        return response
    }
)

const UsersSlice = createSlice({
    name: "UsersSlice",
    initialState: {
        listUser: [],
        user: {}
    },
    extraReducers: (builder) => builder
        .addCase(getUserInfo.fulfilled, (state, action) => {
            state.user = action.payload
        })

})

export default UsersSlice.reducer