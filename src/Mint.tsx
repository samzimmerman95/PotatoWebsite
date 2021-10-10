import React, { useState } from "react";

export default function Mint() {
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

  return (
    <div>
      <h1 className="text-white">Join the Club</h1>
      <div className="row">
        <div className="col-md text-white">
          Text about the price and whatever garbage. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id
          aliquet. Urna et pharetra pharetra massa massa ultricies. Tellus cras
          adipiscing enim eu.
        </div>
        <div className="col-md">
          <div className="row pt-2 pb-2 d-flex justify-content-center align-items-center">
            <div className="col-4 text-white d-flex justify-content-start">
              Amount
            </div>
            <div className="col-4 text-white d-flex justify-content-center align-items-center">
              <i
                className="fas fa-minus fa-2x px-4"
                onClick={decrementCount}
              ></i>
              {count}
              <i
                className="fas fa-plus fa-2x px-4"
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
          <div className="pt-2 pb-4 d-flex justify-content-center">
            <button type="button" className="btn myaccent4 px-5">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
