import React, { useState } from "react";

export default function Collection(props: any) {
  const [showBorder, setShowBorder] = useState(0);
  return (
    <div className="mb-3">
      <h2 className="text-white myheaderFont">The Collection</h2>
      <div className="row mt-2 d-flex justify-content-center">
        <div
          className="col-md-4 d-flex mb-4 mb-md-3 justify-content-center relativeContainer"
          onMouseEnter={() => setShowBorder(1)}
          onMouseLeave={() => setShowBorder(0)}
        >
          <img
            src={require("./assets/collection/1.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
          {showBorder === 1 ? (
            <img
              src={require("./assets/FryFrame3.svg").default}
              className="collectionBorder p-0 m-0"
              alt="French fry frame"
            />
          ) : (
            <div></div>
          )}
        </div>
        <div
          className="col-md-4 d-flex mb-4 mb-md-3 justify-content-center relativeContainer"
          onMouseEnter={() => setShowBorder(2)}
          onMouseLeave={() => setShowBorder(0)}
        >
          <img
            src={require("./assets/collection/2.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
          {showBorder === 2 ? (
            <img
              src={require("./assets/FryFrame3.svg").default}
              className="collectionBorder p-0 m-0"
              alt="French fry frame"
            />
          ) : (
            <div></div>
          )}
        </div>
        <div
          className="col-md-4 d-flex mb-4 mb-md-3 justify-content-center relativeContainer"
          onMouseEnter={() => setShowBorder(3)}
          onMouseLeave={() => setShowBorder(0)}
        >
          <img
            src={require("./assets/collection/3.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
          {showBorder === 3 ? (
            <img
              src={require("./assets/FryFrame3.svg").default}
              className="collectionBorder p-0 m-0"
              alt="French fry frame"
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="row mt-md-2 d-flex justify-content-center">
        <div
          className="col-md-4 d-flex mb-4 mb-md-3 justify-content-center relativeContainer"
          onMouseEnter={() => setShowBorder(4)}
          onMouseLeave={() => setShowBorder(0)}
        >
          <img
            src={require("./assets/collection/4.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
          {showBorder === 4 ? (
            <img
              src={require("./assets/FryFrame3.svg").default}
              className="collectionBorder p-0 m-0"
              alt="French fry frame"
            />
          ) : (
            <div></div>
          )}
        </div>
        <div
          className="col-md-4 d-flex mb-4 mb-md-3 justify-content-center relativeContainer"
          onMouseEnter={() => setShowBorder(5)}
          onMouseLeave={() => setShowBorder(0)}
        >
          <img
            src={require("./assets/collection/5.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
          {showBorder === 5 ? (
            <img
              src={require("./assets/FryFrame3.svg").default}
              className="collectionBorder p-0 m-0"
              alt="French fry frame"
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="mt-2 d-flex justify-content-center">
        <a
          className="btn myaccent4 px-4 text-white"
          href={props.openseaCollection}
          target="_blank"
          rel="noreferrer"
        >
          Show More
        </a>
      </div>
    </div>
  );
}
