import { ethers } from "ethers";
import React, { useState } from "react";
import ContractABI from "./ContractABI.json";

export default function Mint() {
  const contractAddress = "0xE7C18a3E60FC387f3Ae2725BF92811AAD05865f3";
  const [count, setCount] = useState(1);
  const cost = 0.005;
  var totalCost = (cost * count).toFixed(3);
  function incrementCount() {
    if (count < 20) {
      setCount(count + 1);
    }
  }
  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function IncreaseCounter() {
    if (count === 20) {
      return (
        <i
          className="fas fa-plus fa-2x px-4 mintCountDisable"
          onClick={incrementCount}
        ></i>
      );
    }
    return <i className="fas fa-plus fa-2x px-4" onClick={incrementCount}></i>;
  }
  function DecreaseCounter() {
    if (count === 1) {
      return (
        <i
          className="fas fa-minus fa-2x px-4 mintCountDisable"
          onClick={decrementCount}
        ></i>
      );
    }
    return <i className="fas fa-minus fa-2x px-4" onClick={decrementCount}></i>;
  }

  async function clickMint() {
    const { ethereum }: any = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    // The Metamask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    const PotatoContract = new ethers.Contract(
      contractAddress,
      ContractABI,
      signer
    );
    console.log(parseFloat(totalCost) * 10 ** 18);
    const costWEI = parseFloat(totalCost) * 10 ** 18;
    console.log(await PotatoContract.balanceOf(signer.getAddress()));
    let tx = await PotatoContract.mint(signer.getAddress(), count, {
      // gasLimit: 500000,
      value: costWEI.toString(),
    });

    console.log(tx);
    console.log(await tx.wait());
  }

  return (
    <div className="mb-2">
      <h2 className="text-white">Join the Club</h2>
      <div className="row">
        <div className="col-md text-white">
          Each Potato Club NFT will cost {cost} ETH. The price is fixed for the
          entire duration of sale. The maximum you can mint at one time is 20.
          Text about the price and whatever garbage. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id
          aliquet.
        </div>
        <div className="col-md">
          <div className="row pt-2 pb-2 d-flex justify-content-center align-items-center">
            <div className="col-4 text-white d-flex justify-content-start">
              Amount
            </div>
            <div className="col-4 text-white d-flex justify-content-center align-items-center">
              <DecreaseCounter />
              {count}
              <IncreaseCounter />
            </div>
          </div>
          <div className="row pt-2 pb-4 text-white d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-start">Total</div>
            <div className="col-4 d-flex justify-content-center">
              {totalCost} ETH
            </div>
          </div>
          <div className="pt-2 pb-2 d-flex justify-content-center">
            <button
              type="button"
              className="btn myaccent4 px-5"
              onClick={clickMint}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
