export interface User {
  address: string;
  name: string;
  email: string;
  administeredGames: string[];
  isVerified: boolean;
  lew3lupIdTokens: lew3lupToken[];
}

enum TypeOfResponse {
  SUCCESS = "success",
  ERROR = "error",
}

interface ApiError {
  message: string;
}

export interface GoogleAuthData {
  type: TypeOfResponse;
  link: string;
}

export interface MetamskAuthData {
  type: TypeOfResponse;
  loginMessage: string;
}

export interface MetamaskLoginData {
  type: TypeOfResponse;
  token: string;
  user: User;
}

export interface SetUsernameData {
  type: string;
  error?: ApiError;
  user?: User;
}

export interface FetchUserData {
  type: TypeOfResponse;
  data?: User;
  error?: ApiError;
}

export interface BlockchainConfigData {
  type: TypeOfResponse;
  data: Network[];
}

export interface GetVerifiationInitData {
  type: TypeOfResponse;
  data?: string;
  error?: ApiError;
}

export interface GetMintingSignatureData {
  type: TypeOfResponse;
  data?: string;
  error?: ApiError;
}

export interface Network {
  chainId: number;
  name: string;
  contractAddress: string;
  rpcUrl: string;
  explorerUrl: string;
  currencySymbol: string;
}

interface lew3lupToken {
  chainId: number;
  idInContract: number;
}
