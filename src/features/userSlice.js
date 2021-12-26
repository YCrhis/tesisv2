import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        company: null,
        admin: null
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null
        },
        loginCompany: (state, action) => {
            state.company = action.payload;
        },
        logoutCompany: (state) => {
            state.company = null
        },
        loginAdmin: (state, action) => {
            state.admin = action.payload;
        },
        logoutAdmin: (state) => {
            state.admin = null
        }
    }
})
export const { loginUser, logoutUser, loginCompany, logoutCompany, loginAdmin, logoutAdmin } = userSlice.actions;

export const selectUser = (state) => state.user.user

export default userSlice.reducer;