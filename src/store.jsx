import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slice/AuthSlice"
import GroupReducer from "./Slice/GroupSlice"
import UsersReducer from "./Slice/UsersSlice"

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        groups: GroupReducer,
        users: UsersReducer
    }
})

export default store;