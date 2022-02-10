import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function NotFound(props: any) {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <div className="container text-white">
          <div className="mt-2 mb-5">
            <div className="d-flex justify-content-md-start myheaderFont">
              <Link
                to="/"
                className="text-white"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Potato Club </h3>
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column text-center mt-5">
            <h3 className="myheaderFont">404 - Page Not Found</h3>
            <div className="mt-2 d-flex justify-content-center">
              <Link to="/" className="btn myaccent4 px-5 text-white">
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer
        address={props.contractAddress}
        openseaCollection={props.collectionURL}
      ></Footer>
    </div>
  );
}
