import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios"
export const register = createAsyncThunk("auth/register", async (newUser) => {
    const response = await axios.post("/auth/register", newUser);
    return response;
})
export const login = createAsyncThunk("auth/login", async ({ email, password }) => {
    const response = await axios.post("auth/login", { email, password });
    return response;
})
export const logout = createAsyncThunk("auth/logout", async () => {
    const response = await axios.post("auth/logout");
    return response;
})
const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        token: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(register.fulfilled, (state) => {

            })
            .addCase(logout.fulfilled, (state) => {
                state.token = null;
                state.userId = null;
                localStorage.removeItem("token");
            })
    }
})

export default AuthSlice.reducer;