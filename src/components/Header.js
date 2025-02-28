import { useState } from "react";
import { ethers } from "ethers";

export default function Header({ onConnect }) {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      onConnect(address);
    } else {
      alert("MetaMask not detected");
    }
  };

  return (
    <header className="w-full flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Semantix AVS Benchmarking</h1>
      {!account ? (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Connect MetaMask
        </button>
      ) : (
        <p className="text-green-400">Connected: {account}</p>
      )}
    </header>
  );
}