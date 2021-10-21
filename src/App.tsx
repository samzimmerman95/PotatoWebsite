import React from "react";
import "./App.css";
import Connect from "./Connect";
import Title from "./Title";
import Collection from "./Collection";
import Mint from "./Mint";
import Team from "./Team";
import Footer from "./Footer";

function App() {
  return (
    <div className="container-fluid mybackground">
      <div className="container">
        <Connect></Connect>
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
