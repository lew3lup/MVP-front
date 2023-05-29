import { Network } from "shared/api/types";

export interface BlockchainSchema {
  isLoading?: boolean;
  error?: string;

  networks: Network[];
  signature?: string;
}
