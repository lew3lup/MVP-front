import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { GoogleAuthData } from "shared/api/types";

export const loginByGoogle = createAsyncThunk<void, void, ThunkConfig<string>>(
  "auth/authByGoogle",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<GoogleAuthData>("/get-google-login-url");

      if (!response?.data) {
        throw new Error("Request is incorrect");
      }

      // Пока так.
      open(response.data.link, "googleAuth", "");
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e.message || "smth wnt wrng");
    }
  }
);
