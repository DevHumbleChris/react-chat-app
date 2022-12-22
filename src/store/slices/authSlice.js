import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        authenticated: false
    },
    reducers: {
        setAuthentification: (state) => {
            state.authenticated = !state.authenticated
        }
    }
})

export const { setAuthentification } = authSlice.actions
export default authSlice.reducer
