import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        captchaUrl: null,
        usersData: {
            login: "",
            email: "",
            //phoneNumber: "",
            userId: null,
            currentUserName: null
        }
    },
    reducers: {
        setUser(state, action) {
            state.usersData = action.payload
        },
        setCaptchaUrl(state, action) {
            state.captchaUrl = action.payload
        }
    }
});

export const {setUser, setCaptchaUrl} = authSlice.actions;

export default authSlice.reducer;