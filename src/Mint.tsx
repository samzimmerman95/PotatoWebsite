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
      <h1 className="row px-5">Join the Club</h1>
      <div className="row pt-2 d-flex justify-content-center">
        <div className="col-md-2 bg-warning d-flex justify-content-start">
          Amount
        </div>
        <div className="col-md-2 bg-success d-flex justify-content-center align-items-center">
          <i className="fas fa-minus fa-2x px-3" onClick={decrementCount}></i>
          {count}
          <i className="fas fa-plus fa-2x px-3" onClick={incrementCount}></i>
        </div>
      </div>
      <div className="row pt-2 pb-4 d-flex justify-content-center">
        <div className="col-md-2 bg-warning d-flex justify-content-start">
          Total
        </div>
        <div className="col-md-2 bg-success d-flex justify-content-center">
          {totalCost} ETH
        </div>
      </div>
      <div className="row pt-2 pb-4 d-flex justify-content-center">
        <div className="col-md-2 bg-warning d-flex justify-content-center">
          <button type="button" className="btn btn-dark">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
