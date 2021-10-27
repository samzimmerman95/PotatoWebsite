import React from "react";

export default function Collection() {
  return (
    <div className="mb-3">
      <h2 className="text-white myheaderFont">The Collection</h2>
      <div className="row mt-2 d-flex justify-content-center">
        <div className="col-md-4 d-flex mb-3 justify-content-center">
          <img
            src={require("./assets/collection/1.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
        </div>
        <div className="col-md-4 d-flex mb-3 justify-content-center">
          <img
            src={require("./assets/collection/2.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
        </div>
        <div className="col-md-4 d-flex mb-3 justify-content-center">
          <img
            src={require("./assets/collection/3.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
        </div>
      </div>
      <div className="row mt-md-2 d-flex justify-content-center">
        <div className="col-md-4 d-flex mb-3 justify-content-center">
          <img
            src={require("./assets/collection/5.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
        </div>
        <div className="col-md-4 d-flex mb-3 justify-content-center">
          <img
            src={require("./assets/collection/67.png").default}
            className="img-fluid rounded"
            alt="Collection Item"
          />
        </div>
      </div>
    </div>
  );
}
