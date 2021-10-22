import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import ContractABI from "./ContractABI.json";

export default function Mint() {
  const contractAddress = "0xE75F070d1822C279b852C79b602B768a932f9702";
  const [count, setCount] = useState(1);
  const [buyDisabled, setBuyDisabled] = useState(false);
  const [incCounterStyle, setIncCounterStyle] = useState("");
  const [decCounterStyle, setDecCounterStyle] = useState("mintCountDisable");
  const cost = 0.005;
  var totalCost = (cost * count).toFixed(3);
  const desiredNetwork = "rinkeby";
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

  useEffect(() => {
    if (count === 1) {
      setDecCounterStyle("mintCountDisable");
    } else if (count === 20) {
      setIncCounterStyle("mintCountDisable");
    } else {
      setDecCounterStyle("");
      setIncCounterStyle("");
    }
  }, [count]);

  async function clickMint() {
    const { ethereum }: any = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    if ((await provider.getNetwork()).name !== desiredNetwork) {
      alert("Wrong network! Switch to " + desiredNetwork + ".");
      return;
    }
    setBuyDisabled(true);
    const signer = provider.getSigner();

    const PotatoContract = new ethers.Contract(
      contractAddress,
      ContractABI,
      signer
    );
    const costWEI = parseFloat(totalCost) * 10 ** 18;
    console.log(await PotatoContract.balanceOf(signer.getAddress()));
    let tx = await PotatoContract.mint(signer.getAddress(), count, {
      // gasLimit: 500000,
      value: costWEI.toString(),
    });

    console.log(tx);
    console.log(await tx.wait());
    setBuyDisabled(false);
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
              <i
                className={`fas fa-minus fa-2x px-4 ${decCounterStyle}`}
                onClick={decrementCount}
              ></i>
              {count}
              <i
                className={`fas fa-plus fa-2x px-4 ${incCounterStyle}`}
                onClick={incrementCount}
              ></i>
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
              disabled={buyDisabled}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
