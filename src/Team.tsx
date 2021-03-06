import React from "react";

export default function Team() {
  return (
    <div className="mb-5">
      <h2 className="text-white myheaderFont">The Team</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 mb-md-0 mb-2 d-flex flex-column justify-content-center align-items-center">
          <img
            src={require("./assets/team/matt.png").default}
            className="img-fluid rounded"
            alt="Team Member"
          />
          <div className="text-white pt-2">Snappy</div>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <img
            src={require("./assets/team/sam.png").default}
            className="img-fluid rounded"
            alt="Team Member"
          />
          <div className="text-white pt-2">Shanky</div>
        </div>
      </div>
    </div>
  );
}
