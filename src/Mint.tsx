import React, { useState, useEffect } from "react";
import MintModal from "./MintModal";

export default function Mint(props: any) {
  const [count, setCount] = useState(1);
  const [buyDisabled, setBuyDisabled] = useState(true);
  const [incCounterStyle, setIncCounterStyle] = useState("");
  const [decCounterStyle, setDecCounterStyle] = useState("mintCountDisable");
  const [cost] = useState(0.01);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalSuccess, setModalSuccess] = useState(true);
  const [modalWaiting, setModalWaiting] = useState(true);
  var totalCost = (cost * count).toFixed(2);

  useEffect(() => {
    if (Object.keys(props.signer).length !== 0) {
      setBuyDisabled(false);
    }
  }, [props.signer]);

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
  function closeModal() {
    setShowModal(false);
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
    if ((await props.provider.getNetwork()).name !== props.desiredNetwork) {
      alert("Wrong network! Please switch to " + props.desiredNetwork + ".");
      return;
    }
    setBuyDisabled(true);

    const costWEI = parseFloat(totalCost) * 10 ** 18;

    await props.contract
      .mint(props.signer.getAddress(), count, {
        // gasLimit: 500000,
        value: costWEI.toString(),
      })
      .then((result: any) => {
        console.log("tx", result);
        setShowModal(true);
        return result.wait();
      })
      .then((result: any) => {
        setShowModal(true);
        setModalWaiting(false);
        console.log("Wait result", result);
      })
      .catch((err: any) => {
        setModalSuccess(false);
        try {
          setModalText(err.error.message);
        } catch (error) {
          setModalText(err);
        } finally {
          setShowModal(true);
        }
      });

    // console.log("wait for tx", await tx.wait());
    // let waitTX = await tx.wait().catch((err: any) => {
    //   console.error("waitTX error:", err);
    // });
    setBuyDisabled(false);
  }

  return (
    <div className="mb-3">
      <h2 className="text-white myheaderFont">Join the Club</h2>
      <MintModal
        show={showModal}
        bodyText={modalText}
        waiting={modalWaiting}
        success={modalSuccess}
        onClose={closeModal}
      />
      <div className="row">
        <div className="col-md text-white">
          Each Potato Club NFT will cost {cost} ETH. The price is fixed for the
          entire duration of sale. The maximum you can mint at one time is 20.
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
          <div className="pt-2 d-flex justify-content-center">
            <button
              type="button"
              className="btn myaccent4 px-5 text-white"
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
