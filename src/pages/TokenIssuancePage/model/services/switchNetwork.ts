import { Network } from "shared/api/types";
import Web3 from "web3";

export async function switchNetwork(network: Network) {
  const chainId = Web3.utils.toHex(network.chainId);

  try {
    if (!window.ethereum) {
      throw new Error("Metamask is not connected");
    }

    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
  } catch (switchError: any) {
    // Этот код ошибки указывает на то, что сеть отсутствует в MetaMask.
    if (switchError.code === 4902) {
      try {
        if (!window.ethereum) {
          throw new Error("Metamask is not connected");
        }
        // Добавляем сеть в MetaMask
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId,
              chainName: network.name,
              rpcUrls: ["https://goerli.etherscan.io"] /* ... */,
              nativeCurrency: {
                name: "Goerli",
                symbol: "GrlETH",
                decimals: 18,
              },
            },
          ],
        });
      } catch (addError) {
        console.log(addError);
      }
    }
    console.log(switchError.message || "error");
  }
}
