import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Collection from "./Collection";
import Mint from "./Mint";
import Team from "./Team";
import Footer from "./Footer";

function App() {
  return (
    <div className="container-fluid mybackground">
      <div className="container">
        {/* Row for Web3 connection button */}
        <div className="row justify-content-md-end">
          <div className="col col-md-4 py-3 d-flex justify-content-end">
            <button type="button" className="btn btn-danger">
              Disconnected
            </button>
          </div>
        </div>
        <Title></Title>
        <Collection></Collection>
        <Mint></Mint>
        <Team></Team>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
