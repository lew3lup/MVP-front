import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { FetchUserData, User } from "shared/api/types";

export const fetchUserData = createAsyncThunk<User, void, ThunkConfig<string>>(
  "user/fetchUserData",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<FetchUserData>("/get-user-data");

      if (!response.data) throw new Error("Request is incorrect");
      if (response.data.type !== "success") throw new Error(response.data.error?.message);
      if (!response.data.data) throw new Error("No data");

      return response.data.data;
    } catch (e: any) {
      return rejectWithValue(e.message || "error");
    }
  }
);
