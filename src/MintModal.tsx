import React from "react";
import Modal from "react-bootstrap/Modal";

export default function MintModal(props: any) {
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
              You are offically a Potato Club NFT owner! To see your Potato
              refresh the page, or visit OpenSea. Thank you for joining our
              community, we hope to see you around!
            </Modal.Body>
          </div>
        )}

        <Modal.Footer>
          <button
            type="button"
            className="btn myaccent1 px-5 text-white"
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
            className="btn myaccent4 px-4 text-white"
            onClick={props.onClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
