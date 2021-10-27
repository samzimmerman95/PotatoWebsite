import React, { useState } from "react";
import { ethers } from "ethers";
import ContractABI from "./ContractABI.json";
import "./App.css";
import Connect from "./Connect";
import Title from "./Title";
import MyCollection from "./MyCollection";
import Collection from "./Collection";
import Mint from "./Mint";
import Team from "./Team";
import Footer from "./Footer";

function App() {
  const [ethereum, setEthereum] = useState();
  const [provider, setProvider] = useState({});
  const [signer, setSigner] = useState({});
  const [contractAddress] = useState(
    "0xE75F070d1822C279b852C79b602B768a932f9702"
  );
  // const [contractAddress] = useState(
  //   "0xE7C18a3E60FC387f3Ae2725BF92811AAD05865f3"
  // );
  const [PotatoContract, setPotatoContract] = useState({});
  const [desiredNetwork] = useState("rinkeby");

  function onConnected() {
    console.log("Connection confirmed");
    let { ethereum }: any = window;
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const PotatoContract = new ethers.Contract(
      contractAddress,
      ContractABI,
      signer
    );
    ethereum.on("chainChanged", () => window.location.reload());
    setEthereum(ethereum);
    setProvider(provider);
    setSigner(signer);
    setPotatoContract(PotatoContract);
  }

  return (
    <div className="container-fluid mybackground">
      <div className="container">
        <Connect connectCallback={onConnected}></Connect>
        <Title></Title>
        <MyCollection
          provider={provider}
          signer={signer}
          contract={PotatoContract}
          desiredNetwork={desiredNetwork}
        ></MyCollection>
        <Collection></Collection>
        <Mint
          provider={provider}
          signer={signer}
          contract={PotatoContract}
          desiredNetwork={desiredNetwork}
        ></Mint>
        <Team></Team>
        <Footer address={contractAddress}></Footer>
      </div>
    </div>
  );
}

export default App;
