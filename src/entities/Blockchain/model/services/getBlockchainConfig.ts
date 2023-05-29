import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { BlockchainConfigData, FetchUserData, Network, User } from "shared/api/types";

export const getBlockchainConfig = createAsyncThunk<Network[], void, ThunkConfig<string>>(
  "blockchain/getBlockchainConfig",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<BlockchainConfigData>("/get-blockchain-config");

      if (!response.data) throw new Error("Request is incorrect");
      if (!response.data.data) throw new Error("No data");

      return response.data.data;
    } catch (e: any) {
      return rejectWithValue(e.message || "error");
    }
  }
);
