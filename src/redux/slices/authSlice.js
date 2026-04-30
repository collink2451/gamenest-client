import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: !!localStorage.getItem('username'),
        user: localStorage.getItem('username') || undefined,
    },
    reducers: {
        login(state, action) {
            const username = action.payload?.trim();
            if (username) {
                localStorage.setItem('username', username);
                state.loggedIn = true;
                state.user = username;
            }
        },
        checkLogin(state) {
            const username = localStorage.getItem('username');
            if (username) {
                state.loggedIn = true;
                state.user = username;
            }
        },
        logout(state) {
            localStorage.removeItem('username');
            state.loggedIn = false;
            state.user = undefined;
        }
    }
});

export const { login, checkLogin, logout } = authSlice.actions;
export const userSelector = (state) => state.auth.user;
export const loggedInSelector = (state) => state.auth.loggedIn;
export default authSlice.reducer;
