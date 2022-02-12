import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import HelpGuide from "./HelpGuide";
import NotFound from "./NotFound";

function App() {
  const [contractAddress] = useState(
    "0xeD5A54a2b7800C3D1c66F0E601037738B8dF6f8B"
  );
  const [collectionURL] = useState(
    "https://testnets.opensea.io/collection/potatoclub-maticv1"
  );
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              contractAddress={contractAddress}
              collectionURL={collectionURL}
            />
          }
        />
        <Route
          path="how-to-guide"
          element={
            <HelpGuide
              contractAddress={contractAddress}
              collectionURL={collectionURL}
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              contractAddress={contractAddress}
              collectionURL={collectionURL}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
