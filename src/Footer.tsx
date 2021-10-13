import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="col-md d-md-flex text-center justify-content-center align-items-center pb-3">
        <a
          className="link-icon"
          href="https://twitter.com/Potato_Club_"
          target="_blank"
        >
          <i className="fab fa-twitter fa-2x px-3"></i>
        </a>

        <a className="link-icon" href="" target="_blank">
          <i className="fab fa-discord fa-2x px-3"></i>
        </a>
        <a className="link-icon" href="https://opensea.io" target="_blank">
          <img
            src={require("./assets/OpenSea.svg").default}
            className="edit-link-icon link-photo mx-3 mb-3 mb-md-0"
            alt="OpenSea"
          />
        </a>
        <a
          className="link-icon"
          href="https://rinkeby.etherscan.io/address/0xE7C18a3E60FC387f3Ae2725BF92811AAD05865f3"
          target="_blank"
        >
          <i className="fas fa-file-contract fa-2x px-3"></i>
        </a>
      </div>
    </div>
  );
}

// Color of icons is controlled in App.css
