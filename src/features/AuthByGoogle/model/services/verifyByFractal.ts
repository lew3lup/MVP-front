import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { GetVerifiationInitData } from "shared/api/types";

export const verifyByFractal = createAsyncThunk<void, void, ThunkConfig<string>>(
  "auth/verifyByFractal",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<GetVerifiationInitData>("/get-verification-init-data");

      if (!response.data) throw new Error("Request is incorrect");
      if (response.data.type !== "success") throw new Error(response.data.error?.message);
      if (!response.data.data) throw new Error("No data");
      
      // Пока так.
      open(response.data.data, "verifyByFractal");
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e.message || "smth wnt wrng");
    }
  }
);
