import React, { useState } from "react";
import { ethers } from "ethers";
import ContractABI from "./ContractABI.json";
import Connect from "./Connect";
import Title from "./Title";
import MyCollection from "./MyCollection";
import Collection from "./Collection";
import Mint from "./Mint";
import Team from "./Team";
import Footer from "./Footer";

function Home(props: any) {
  const [ethereum, setEthereum] = useState();
  const [provider, setProvider] = useState({});
  const [signer, setSigner] = useState({});
  const [PotatoContract, setPotatoContract] = useState({});
  const [desiredNetwork] = useState("matic");

  function onConnected() {
    console.log("Connection confirmed");
    let { ethereum }: any = window;
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const PotatoContract = new ethers.Contract(
      props.contractAddress,
      ContractABI,
      signer
    );
    ethereum.on("chainChanged", () => window.location.reload());
    ethereum.on("accountsChanged", () => window.location.reload());
    setEthereum(ethereum);
    setProvider(provider);
    setSigner(signer);
    setPotatoContract(PotatoContract);
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <Connect
          connectCallback={onConnected}
          desiredNetwork={desiredNetwork}
        ></Connect>
        <Title></Title>
        <MyCollection
          provider={provider}
          signer={signer}
          contract={PotatoContract}
          contractAddress={props.contractAddress}
          desiredNetwork={desiredNetwork}
        ></MyCollection>
        <Collection openseaCollection={props.collectionURL}></Collection>
        <Mint
          provider={provider}
          signer={signer}
          contract={PotatoContract}
          desiredNetwork={desiredNetwork}
        ></Mint>
        <Team></Team>
        <Footer
          address={props.contractAddress}
          openseaCollection={props.collectionURL}
        ></Footer>
      </div>
    </div>
  );
}

export default Home;
