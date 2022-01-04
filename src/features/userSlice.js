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
            state.user = null;
            state.company = null;
        },
        loginCompany: (state, action) => {
            state.company = action.payload;
        },
        loginAdmin: (state, action) => {
            state.admin = action.payload;
        },
        logoutAdmin: (state) => {
            state.admin = null
        }
    }
})
export const { loginUser, logoutUser, loginCompany, loginAdmin, logoutAdmin } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectCompany = (state) => state.user.company;

export default userSlice.reducer;