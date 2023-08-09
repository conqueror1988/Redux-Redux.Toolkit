import { createSlice } from "@reduxjs/toolkit";

//! createSlice ile reducer larimizi ve action larimizi tanimlariz.

const initialState = { name: "", surname: "" };

export const LoginSlice = createSlice({
  name: "login",
  initialState: { value: initialState },
  reducers: {
    loginAction: (state, action) => {
      state.value = action.payload;
    },
    logoutAction: (state) => {
      state.value = initialState;
    },
  },
});

export const loginReducer = LoginSlice.reducer;
export const { loginAction, logoutAction } = LoginSlice.actions;
