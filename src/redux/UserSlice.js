import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        userCred: {
            email: "",
            accountType: ""
        }
    },
    reducers: {
        login: (state, action) => {
            state.userCred.email = action.payload.username;
            state.userCred.accountType = action.payload.accountType;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userCred.email = "";
            state.userCred.accountType = ""


        }
    }
})


export const { login, logout } = userSlice.actions;

export default userSlice.reducer;