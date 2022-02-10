import React, { useEffect, useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";

export default function Connect(props: {
  connectCallback: () => void;
  desiredNetwork: string;
}) {
  const [connected, setConnected] = useState(false);
  const [buttonText, setButtonText] = useState("Disconnected");
  const [buttonColor, setButtonColor] = useState("myaccentRed");
  const [disabledButton, setDisabledButton] = useState(false);
  const [address, setAddress] = useState("");

  // Only run on load bc empty array second arg
  useEffect(() => {
    if (!isMetaMaskInstalled()) {
      console.log("MetaMask not installed");
      setButtonText("Install MetaMask");
    } else {
      console.log("MetaMask installed");
      attemptConnection();
    }
  }, []);

  function isMetaMaskInstalled() {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum }: any = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  }

  async function attemptConnection() {
    const { ethereum }: any = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      connectToMatic();
      setAddress(accounts[0]);
      setConnected(true);
      setButtonText("Connected");
      setButtonColor("myaccentGreen");
      props.connectCallback();
    }
  }

  async function connectMetaMask() {
    setDisabledButton(true);
    const { ethereum }: any = window;
    if (!isMetaMaskInstalled()) {
      const onboarding = new MetaMaskOnboarding({});
      onboarding.startOnboarding();
    } else {
      try {
        // Will open the MetaMask UI
        await ethereum.request({ method: "eth_requestAccounts" });
        attemptConnection();
      } catch (error) {
        console.error(error);
      }
      setDisabledButton(false);
    }
  }

  async function connectToMatic() {
    const { ethereum }: any = window;
    try {
      if (props.desiredNetwork === "maticmum") {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: POLYGON_MUMBAI_PARAMS.chainId }],
        });
      } else if (props.desiredNetwork === "matic") {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: POLYGON_MAINNET_PARAMS.chainId }],
        });
      }
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          if (props.desiredNetwork === "maticmum") {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [POLYGON_MUMBAI_PARAMS],
            });
          } else if (props.desiredNetwork === "matic") {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [POLYGON_MAINNET_PARAMS],
            });
          }
        } catch (addError: any) {
          // handle "add" error
          console.error("Add Error:", addError);
        }
      }
      // handle other "switch" errors
      console.error("Switch Error:", switchError);
    }
  }

  return (
    <div className="mt-4 mb-4">
      <div className="d-flex justify-content-md-end">
        <button
          type="button"
          className={`btn ${buttonColor} text-white mb-2 `}
          onClick={connectMetaMask}
          disabled={disabledButton}
        >
          {buttonText}
        </button>
      </div>
      {connected ? (
        <div className="d-flex justify-content-md-end text-white small">
          Account: {address}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

const POLYGON_MAINNET_PARAMS = {
  chainId: "0x89",
  chainName: "Polygon Mainnet",
  rpcUrls: ["https://polygon-rpc.com/"],
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  blockExplorerUrls: ["https://polygonscan.com/"],
};

const POLYGON_MUMBAI_PARAMS = {
  chainId: "0x13881",
  chainName: "Matic Mumbai",
  rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
};
