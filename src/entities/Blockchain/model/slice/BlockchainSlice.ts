import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BlockchainSchema } from "../types/Blockchain";
import { GetMintingSignatureData, Network } from "shared/api/types";
import { getBlockchainConfig } from "../services/getBlockchainConfig";
import { getMintingSignature } from "../services/getMintingSignature";

const initialState: BlockchainSchema = {
  error: undefined,
  isLoading: false,
  signature: undefined,
  networks: [],
};

export const BlockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlockchainConfig.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getBlockchainConfig.fulfilled, (state, action: PayloadAction<Network[]>) => {
        state.networks = action.payload;
        state.isLoading = false;
      })
      .addCase(getBlockchainConfig.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getMintingSignature.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getMintingSignature.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getMintingSignature.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: blockchainActions } = BlockchainSlice;
export const { reducer: blockchainReducer } = BlockchainSlice;
