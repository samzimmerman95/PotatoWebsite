import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Collection from "./Collection";
import Mint from "./Mint";
import Team from "./Team";
import Footer from "./Footer";

function App() {
  return (
    <div className="container-fluid bg-secondary bg-gradient">
      <div className="container">
        {/* Row for Web3 connection button */}
        <div className="row justify-content-md-end px-5">
          <div className="col col-md-4 bg-info py-3 d-flex justify-content-end">
            <button type="button" className="btn btn-danger">
              Disconnected
            </button>
          </div>
        </div>
        {/* Title and GIF */}
        <div className="row p-5">
          <div className="col-md-7 bg-warning">
            POTATO CLUB
            <div>Description</div>
          </div>
          <div className="col-md-5 bg-success d-flex justify-content-end">
            GIF of potatoes
          </div>
        </div>
        <Collection></Collection>
        <Mint></Mint>
        <Team></Team>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
