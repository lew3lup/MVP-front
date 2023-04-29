import { User } from "shared/api/types";

export interface UserSchema {
  isLoading?: boolean;
  error?: string;

  token?: string;
  _inited?: boolean;
  user?: User;
}
