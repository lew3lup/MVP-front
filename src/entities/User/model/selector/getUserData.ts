import { StateSchema } from "app/providers/store";

export const getUserToken = (state: StateSchema) => state.user.token || "";
export const getUserInited = (state: StateSchema) => state.user._inited || false;
export const getUserAddress = (state: StateSchema) => state.user.user?.address || "";
export const getUserData = (state: StateSchema) => state.user.user;
