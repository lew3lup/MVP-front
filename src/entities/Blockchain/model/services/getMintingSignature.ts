import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { GetMintingSignatureData } from "shared/api/types";

export const getMintingSignature = createAsyncThunk<
  GetMintingSignatureData,
  void,
  ThunkConfig<string>
>("blockchain/getMintingSignature", async (_, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;

  try {
    const response = await extra.api.get<GetMintingSignatureData>(
      "/get-lew3lup-id-minting-signature"
    );

    if (!response.data) throw new Error("Request is incorrect");
    if (!response.data.data) throw new Error("No data");

    return response.data;
  } catch (e: any) {
    return rejectWithValue(e.message || "error");
  }
});
