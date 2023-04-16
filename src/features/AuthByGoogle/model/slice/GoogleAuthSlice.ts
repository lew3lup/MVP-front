import { createSlice } from "@reduxjs/toolkit";
import { loginByGoogle } from "../services/loginByGoogle";
import { GoogleAuthSchema } from "../types/GoogleAuthSchema";

const initialState: GoogleAuthSchema = {
  isLoading: false,
};

export const GoogleAuthSlice = createSlice({
  name: "googleAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginByGoogle.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByGoogle.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: googleAuthActions } = GoogleAuthSlice;
export const { reducer: googleAuthReducer } = GoogleAuthSlice;
