import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store/config/StateSchema";
import { MetamaskLoginData, MetamskAuthData } from "shared/api/types";
import { ACCESS_TOKEN_KEY } from "shared/const/AccessTokenKey";
import Web3 from "web3";

export const loginByMetamask = createAsyncThunk<MetamaskLoginData, string, ThunkConfig<string>>(
  "auth/authByMetamask",
  async (address, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      // Получаем строку для подписи, отправляя ETH-address GET запросом
      const response = await extra.api.get<MetamskAuthData>("/get-metamask-login-message", {
        params: { address },
      });

      if (!response?.data) throw new Error("Request is incorrect");

      // Если строка для подписи пришла
      if (response.data.type === "success") {
        // Получаем строку пришедшую с бэка
        const loginMessage = response.data.loginMessage;
        // Преобразуем её в hex-encoded utf-8 строку, так надо по историческим причинам)
        const message = Web3.utils.stringToHex(loginMessage);

        if (!window.ethereum) throw new Error("Crypto wallet is not found");

        // Получаем подпись пользователя при помощи metamask
        const signature = await window.ethereum.request({
          method: "personal_sign",
          params: [message, address],
        });

        // Отправляем подпись и адресс на бэк
        const res = await extra.api.post<MetamaskLoginData>(
          "/metamask-login",
          {
            address,
            signature,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        if (!res?.data) {
          throw new Error("Request is incorrect");
        }
        localStorage.setItem(ACCESS_TOKEN_KEY, res.data.token);
        return res?.data;
      } else {
        throw new Error("Error");
      }
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e.message || "smth wnt wrng");
    }
  }
);
