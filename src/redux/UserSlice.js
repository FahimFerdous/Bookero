import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        userCred: {
            email: "",
            password: ""
        }
    },
    reducers: {
        login: (state, action) => {
            state.userCred = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userCred = null;
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;