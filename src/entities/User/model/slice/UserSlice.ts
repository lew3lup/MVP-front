import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoogleAuthData, UserSchema } from "../types/User";
import { ACCESS_TOKEN_KEY } from "shared/const/AccessTokenKey";

const initialState: UserSchema = {
  _inited: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<GoogleAuthData>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (token) {
        state.authData = JSON.parse(token);
      }
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
  },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
