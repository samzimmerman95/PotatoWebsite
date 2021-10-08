import React from "react";

export default function Footer() {
  return (
    <div>
      {/* <div className="row pt-2 pb-5 d-flex justify-content-center">
        <div className="col-md-2 bg-warning d-flex justify-content-center">
          Twitter
        </div>
        <div className="col-md-2 bg-success d-flex justify-content-center">
          Discord
        </div>
        <div className="col-md-2 bg-warning d-flex justify-content-center">
          Opensea
        </div>
        <div className="col-md-2 bg-success d-flex justify-content-center">
          Contract
        </div>
      </div> */}
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
        <a className="link-icon" href="" target="_blank">
          <i className="fas fa-store fa-2x px-3"></i>
        </a>
        <a className="link-icon" href="" target="_blank">
          <i className="fas fa-file-contract fa-2x px-3"></i>
        </a>
      </div>
    </div>
  );
}

// Color of icons is controlled in App.css
