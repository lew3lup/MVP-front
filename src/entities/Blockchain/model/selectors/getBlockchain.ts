import { StateSchema } from "app/providers/store";

export const getBlockchainNetworks = (state: StateSchema) => state.blockchain?.networks || [];
export const getBlockchainLoading = (state: StateSchema) => state.blockchain?.isLoading || false;
export const getBlockchainError = (state: StateSchema) => state.blockchain?.error;
export const getBlockchainSignature = (state: StateSchema) => state.blockchain?.signature;
