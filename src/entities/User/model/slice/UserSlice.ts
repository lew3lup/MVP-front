import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "../types/User";
import { ACCESS_TOKEN_KEY } from "shared/const/AccessTokenKey";
import { setName } from "../services/setName";
import { fetchUserData } from "../services/fetchUserData";
import { MetamaskLoginData } from "shared/api/types";

const initialState: UserSchema = {
  isLoading: false,
  error: undefined,
  _inited: false,

  token: "",
  user: undefined,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGoogleAuthData: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setMetamaskAuthData: (state, action: PayloadAction<MetamaskLoginData>) => {
      state.token = action.payload.token;
    },
    initAuthData: (state) => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (token) {
        state.token = token;
      }
    },
    logout: (state) => {
      state.token = undefined;
      state.user = undefined;
      state._inited = false;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setName.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(setName.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(setName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state._inited = true;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state._inited = true;
      });
  },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
