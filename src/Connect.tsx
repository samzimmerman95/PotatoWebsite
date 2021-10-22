import React, { useEffect, useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";

export default function Connect() {
  const [connected, setConnected] = useState(false);
  const [buttonText, setButtonText] = useState("Disconnected");
  const [buttonColor, setButtonColor] = useState("btn-danger");
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
    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        setAddress(accounts[0]);
        setConnected(true);
        setButtonText("Connected");
        setButtonColor("btn-success");
      }
    } catch (error) {
      console.error(error);
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
        const accounts = await ethereum.request({ method: "eth_accounts" });
        setAddress(accounts[0]);
        setConnected(true);
        setButtonText("Connected");
        setButtonColor("btn-success");
      } catch (error) {
        console.error(error);
      }
      setDisabledButton(false);
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-md-end pt-3 pb-1">
        <button
          type="button"
          className={`btn ${buttonColor} mb-2 `}
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
