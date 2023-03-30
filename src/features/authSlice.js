import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
