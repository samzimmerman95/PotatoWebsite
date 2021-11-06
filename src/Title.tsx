import React from "react";

export default function Title() {
  return (
    <div className="row mb-3">
      <div className="col-md-7 text-white">
        <h1 className="text-center lh-1 myheaderFont">
          Potato <br /> Club
        </h1>
        <div>
          The Potato Club is a collection of 10,000 randomly generated Potato
          NFTs.
        </div>
      </div>
      <div className="col-md-5 d-flex justify-content-end">
        <img
          // src={require("./assets/Potatoes.gif").default}
          src={require("./assets/team/sam.png").default}
          className="img-fluid rounded"
          alt="GIF"
        />
      </div>
    </div>
  );
}
