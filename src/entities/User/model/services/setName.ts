import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { SetUsernameData, User } from "shared/api/types";

export const setName = createAsyncThunk<User, string, ThunkConfig<string>>(
  "auth/setUsername",
  async (username, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.post<SetUsernameData>(
        "user/set-username",
        { name: username },
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (!response.data) throw new Error("Request is incorrect");
      if (response.data.type !== "success") throw new Error(response.data.error?.message);
      if (!response.data.user) throw new Error("No data");

      // Этот объект записывается в стор, но операция не обязательная, так как при загрузке приложения эти данные подтягиваются в любом случае
      return response.data.user;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  }
);
