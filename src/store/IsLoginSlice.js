import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginButtonDisabled: true,
  isRegistrButtonDisabled: true,
  isLogin: localStorage.getItem("actualUser") ? true : false
};

export const disabler = createSlice({
  name: "disabler",
  initialState,
  reducers: {
    setIsLoginButtonDisabled: (state, action) => {
      state.isLoginButtonDisabled = action.payload;
    },
    setIsRegistrButtonDisabled: (state, action) => {
      state.isRegistrButtonDisabled = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = !state.isLogin;
    }
  },
});

export const {
  setIsLoginButtonDisabled,
  setIsRegistrButtonDisabled,
  setIsLogin,
} = disabler.actions;
export default disabler.reducer;
