import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { GoogleAuthData } from "entities/User";
import { ACCESS_TOKEN_KEY } from "shared/const/AccessTokenKey";

export const loginByGoogle = createAsyncThunk<GoogleAuthData, void, ThunkConfig<string>>(
  "auth/authByGoogle",
  async (_, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<GoogleAuthData>("/get-google-login-url");

      if (!response?.data) {
        throw new Error("Request is incorrect");
      }

      extra?.navigate?.(response.data.link);

      // localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(response.data.link));

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e.message || "smth wnt wrng");
    }
  }
);
