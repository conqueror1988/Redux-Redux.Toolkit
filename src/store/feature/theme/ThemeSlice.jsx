import { createSlice } from "@reduxjs/toolkit";
import { LoginSlice } from "../login/LoginSlice";

//! createSlice ile reducer larimizi ve action larimizi tanimlariz.
//! ThemeSlice daki amac renk eklemek icin bir tema

const initialState = "";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: { value: initialState },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
    logoutAction: (state) => {
      state.value = initialState;
    },
  },
});

export const themeReducer = ThemeSlice.reducer;
export const { setTheme } = ThemeSlice.actions;
