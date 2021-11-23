import React from "react";

export default function Title() {
  return (
    <div className="row mb-3 mt-4">
      <div className="col-md-7 text-white px-4">
        <h1 className="text-center lh-1 myheaderFont">
          Potato <br /> Club
        </h1>
        <div>
          The Potato Club is a collection of 10,000 rare, randomly generated
          potato NFTs sprouting up on the Ethereum blockchain. At the Potato
          Club, it doesn’t matter if you like your potatoes roasted, baked or
          mashed. All potato lovers are welcome!
        </div>
      </div>
      <div className="col-md-5 d-flex align-items-center relativeContainer py-5 py-md-4">
        <img
          // src={require("./assets/Potatoes.gif").default}
          src={require("./assets/team/sam.png").default}
          className="img-fluid rounded"
          alt="GIF"
        />
        <img
          src={require("./assets/FryFrame3.svg").default}
          className="titleBorder p-1 m-0"
          alt="French fry frame"
        />
      </div>
    </div>
  );
}
