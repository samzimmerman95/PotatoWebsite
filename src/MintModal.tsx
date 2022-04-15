import React from "react";
import Modal from "react-bootstrap/Modal";
import Confetti from "react-dom-confetti";

export default function MintModal(props: any) {
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 35,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 6500,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  if (props.success) {
    return (
      <Modal
        show={props.show}
        onHide={props.onClose}
        backdrop="static"
        keyboard={false}
      >
        {props.waiting ? (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Transaction being mined ...</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </Modal.Body>
          </div>
        ) : (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Congratulations!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-center">
                <Confetti active={props.goConfetti} config={config} />
              </div>
              You are offically a Potato Club NFT owner! To see your Potato
              refresh the page, or visit OpenSea. Thank you for joining our
              community, we hope to see you around on Twitter!
            </Modal.Body>
          </div>
        )}

        <Modal.Footer>
          <button
            type="button"
            className="btn myaccent4 px-5 text-white"
            onClick={props.onClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal
        show={props.show}
        onHide={props.onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>There was an error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your transaction has failed. Please try again. <br /> {props.bodyText}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <button
            type="button"
            className="btn myaccentRed px-4 text-white"
            onClick={props.onClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
