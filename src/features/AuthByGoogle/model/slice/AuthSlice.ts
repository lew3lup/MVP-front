import { createSlice } from "@reduxjs/toolkit";
import { loginByGoogle } from "../services/loginByGoogle";
import { AuthSchema } from "../types/AuthSchema";
import { loginByMetamask } from "../services/loginByMetamask";
import { verifyByFractal } from "../services/verifyByFractal";

const initialState: AuthSchema = {
  token: null,
  isLoading: false,
  error: undefined,
};

export const AuthSlice = createSlice({
  name: "auth",
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
      })
      .addCase(loginByMetamask.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByMetamask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(loginByMetamask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(verifyByFractal.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(verifyByFractal.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyByFractal.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: authActions } = AuthSlice;
export const { reducer: authReducer } = AuthSlice;
