import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import HelpGuide from "./HelpGuide";
import NotFound from "./NotFound";

function App() {
  const [contractAddress] = useState(
    "0xE7C18a3E60FC387f3Ae2725BF92811AAD05865f3"
  );
  const [collectionURL] = useState("https://opensea.io/collection/potatoclub");
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
