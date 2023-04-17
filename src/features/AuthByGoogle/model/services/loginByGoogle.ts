import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { GoogleAuthData } from "entities/User";

export const loginByGoogle = createAsyncThunk<GoogleAuthData, void, ThunkConfig<string>>(
  "auth/authByGoogle",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<GoogleAuthData>("/get-google-login-url");

      if (!response?.data) {
        throw new Error("Request is incorrect");
      }

      // extra?.navigate?.(response.data.link);
      // redirect(response.data.link);

      // Пока так.
      open(response.data.link, "googleAuth", "");

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e.message || "smth wnt wrng");
    }
  }
);
