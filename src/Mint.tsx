import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import MintModal from "./MintModal";

export default function Mint(props: any) {
  const [count, setCount] = useState(1);
  const [buyDisabled, setBuyDisabled] = useState(true);
  const [incCounterStyle, setIncCounterStyle] = useState("");
  const [decCounterStyle, setDecCounterStyle] = useState("mintCountDisable");
  const [cost] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalSuccess, setModalSuccess] = useState(true);
  const [modalWaiting, setModalWaiting] = useState(true);
  const [modalConfetti, setModalConfetti] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [releaseTime] = useState(1638702747000);
  // const [releaseTime] = useState(Date.now() + 10000);
  var totalCost = (cost * count).toFixed(0);

  useEffect(() => {
    if (Object.keys(props.signer).length !== 0 && Date.now() >= releaseTime) {
      setBuyDisabled(false);
    }
  }, [props.signer, showTimer, releaseTime]);

  useEffect(() => {
    if (Date.now() >= releaseTime) {
      setShowTimer(false);
    }
  }, []);

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
    setModalText("");
    setModalSuccess(true);
    setModalWaiting(true);
    setModalConfetti(false);
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
        setModalConfetti(true);
        console.log("Wait result", result);
      })
      .catch((err: any) => {
        setModalSuccess(false);
        try {
          setModalText(err.error.message);
        } catch (error) {
          try {
            setModalText(err.message);
          } catch (error2) {
            setModalText(err.toString());
          }
        } finally {
          setShowModal(true);
        }
      });

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
        goConfetti={modalConfetti}
      />
      <div className="row">
        <div className="col-md text-white">
          <div className="mb-4">
            Each Potato Club NFT will only cost {cost} MATIC. If you need help
            with the minting process, consult our guide below. Come on, join the
            club!
          </div>
          <div className="text-center fs-4">
            {showTimer ? (
              <Countdown
                date={releaseTime}
                onComplete={() => setShowTimer(false)}
              />
            ) : (
              <div></div>
            )}
          </div>
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
              {totalCost} MATIC
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
      <div className="mt-2 d-flex justify-content-center">
        <Link
          to="/how-to-guide"
          className="btn myaccent4 px-5 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help Guide
        </Link>
      </div>
    </div>
  );
}
