export async function checkIfWalletIsConnected(
  onConnected: React.Dispatch<React.SetStateAction<string>>
) {
  if (window.ethereum) {
    const accounts = (await window.ethereum.request({
      method: "eth_accounts",
    })) as any[];

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }
  }
}

export async function connect(onConnected: React.Dispatch<React.SetStateAction<string>>) {
  console.log("connecting");

  if (!window.ethereum) {
    alert("MetaMask extension in not found. Please install it");
    return;
  }

  const accounts = (await window.ethereum.request({
    method: "eth_requestAccounts",
  })) as any[];

  onConnected(accounts[0]);
}
