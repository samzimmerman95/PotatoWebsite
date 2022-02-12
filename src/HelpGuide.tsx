import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function HelpGuide(props: any) {
  return (
    <div className="container-fluid">
      <div className="container text-white">
        <div className="mt-2 mb-3">
          <div className="d-flex justify-content-md-start myheaderFont">
            <Link
              to="/"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <h3>Potato Club </h3>
            </Link>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg"></div>
          <div className="col-lg-8">
            <div className="mb-3">
              <h2 className="text-center lh-1 myheaderFont">
                How to Purchase a Potato Club <br /> NFT on Polygon
              </h2>
              The Potato Club collection lives on the Polygon network. Polygon
              is a scaling solution for the Ethereum blockchain, and connects to
              it via sidechains. To purchase an NFT on Polygon, there are a few
              simple steps that need to be completed.
            </div>
            <div className="mb-3" id="metamask">
              <h3 className="text-white myheaderFont">
                Set up a MetaMask Wallet
              </h3>
              Potato Club will prompt and direct you to install{" "}
              <a
                className="text-white"
                href={"https://metamask.io"}
                target="_blank"
                rel="noreferrer"
              >
                MetaMask
              </a>{" "}
              if it is not detected as an extension in your browser. This will
              enable you to interact with Web3 applications and different
              blockchains.
            </div>
            <div className="mb-3" id="add-polygon">
              <h3 className="text-white myheaderFont">Add Polygon to Wallet</h3>
              If you are not already on the Polygon Mainnet, Potato Club will
              prompt you automatically to add and switch to it when you connect
              with MetaMask. You can now interact with the Polygon Mainnet
              through your MetaMask wallet.
              <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-5 col-8 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Add_Polygon.png").default}
                    className="img-fluid rounded"
                    alt="Adding Polygon network to MetaMask"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3" id="get-matic">
              <h3 className="text-white myheaderFont">Get MATIC on Polygon</h3>
              MATIC is the native token of the Polygon network (like ETH to the
              Ethereum network) and is necessary to complete transactions. There
              are several ways you can obtain MATIC if you do not already have
              some in your wallet. We will break down different methods
              depending on which stage you are starting from. <br /> <br />
              It is helpful to be familiar with two practices, bridging and
              swapping. Bridging is the process of moving a cryptocurrency from
              one network to another. Typically, this is from the Ethereum
              network to the Polygon network. We recommend the{" "}
              <a
                className="text-white"
                href={
                  "https://bridge.umbria.network/bridge/ethereum-polygon/eth"
                }
                target="_blank"
                rel="noreferrer"
              >
                Umbria Bridge
              </a>{" "}
              because of its lower fees. Swapping is the act of exchanging one
              cryptocurrency token for another. For swapping we recommend{" "}
              <a
                className="text-white"
                href={"https://wallet.polygon.technology/token-swap/"}
                target="_blank"
                rel="noreferrer"
              >
                Polygon Token Swap
              </a>
              . The overall plan here is to bridge an asset to the Polygon
              network, then if necessary, swap it for MATIC.
            </div>
            <div className="mb-3" id="bridge-eth">
              <h3 className="text-white myheaderFont">
                ETH on Ethereum Mainnet
              </h3>
              Visit{" "}
              <a
                className="text-white"
                href={
                  "https://bridge.umbria.network/bridge/ethereum-polygon/eth"
                }
                target="_blank"
                rel="noreferrer"
              >
                Umbria Bridge
              </a>{" "}
              and connect to the application with MetaMask. Double check that
              you are connected to the Ethereum Mainnet network in your wallet.
              Enter the amount of ETH you wish to bridge, and you will see the
              amount you will recieve on Polygon.
              <div className="row d-flex justify-content-center my-2">
                <div className="col-md-8 col-10 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Bridge.png").default}
                    className="img-fluid rounded"
                    alt="Bridging ETH to Polygon network"
                  />
                </div>
              </div>
              Confirm the details of the transaction, and click "Send". You will
              have to confirm the transaction in MetaMask as well. Now wait for
              the transaction to complete! <br /> <br />
              When your transaction has been completed, you should be prompted
              to "Add Asset to MetaMask". Click this will ensure your asset will
              be visable, then open MetaMask and "Add Token".
              <div className="row d-flex justify-content-center my-2">
                <div className="col-md-5 col-sm col-8 mb-2 mb-md-0 d-flex align-items-center">
                  <img
                    src={
                      require("./assets/help_guide/Bridge_Confirmed.png")
                        .default
                    }
                    className="img-fluid rounded"
                    alt="Bridging ETH to Polygon network"
                  />
                </div>
                <div className="col-md-5 col-sm col-8 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Add_Token.png").default}
                    className="img-fluid rounded"
                    alt="Confirm ETH Token on Polygon"
                  />
                </div>
              </div>
              Now you should be able to see your ETH on Polygon in your wallet.
              The last step is to swap ETH for MATIC. Starting with the{" "}
              <a
                className="text-white"
                href={"https://wallet.polygon.technology/gas-swap"}
                target="_blank"
                rel="noreferrer"
              >
                Polygon Gas Swap
              </a>{" "}
              to swap a small amount for MATIC so we can use it to pay for gas
              in the next swap transaction. 1 MATIC is all you will need.
              Finally, using the{" "}
              <a
                className="text-white"
                href={"https://wallet.polygon.technology/token-swap/"}
                target="_blank"
                rel="noreferrer"
              >
                Polygon Token Swap
              </a>{" "}
              to swap any larger amount of ETH for MATIC.
              <div className="row d-flex justify-content-center my-2">
                <div className="col-md-5 col-sm col-8 mb-2 mb-md-0 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Gas_Swap.png").default}
                    className="img-fluid rounded"
                    alt="Swapping ETH for MATIC gas"
                  />
                </div>
                <div className="col-md-5 col-sm col-8 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Token_Swap.png").default}
                    className="img-fluid rounded"
                    alt="Swapping ETH for MATIC"
                  />
                </div>
              </div>
              Now you are ready to use your MATIC on Polygon!
            </div>
            <div className="mb-3" id="bridge-matic">
              <h3 className="text-white myheaderFont">
                MATIC on Ethereum Mainnet
              </h3>
              Bridging MATIC from the Ethereum Mainnet to Polygon is by far the
              simplest process. Visit{" "}
              <a
                className="text-white"
                href={
                  "https://bridge.umbria.network/bridge/ethereum-polygon/matic"
                }
                target="_blank"
                rel="noreferrer"
              >
                Umbria Bridge
              </a>{" "}
              and connect to the site with MetaMask. Double check that you are
              connected to the Ethereum Mainnet network in your wallet. Enter
              the amount of MATIC you wish to bridge, and you will see the
              amount you will recieve on Polygon.
              <div className="row d-flex justify-content-center my-2">
                <div className="col-md-8 col-10 d-flex align-items-center">
                  <img
                    src={
                      require("./assets/help_guide/Bridge_Matic.png").default
                    }
                    className="img-fluid rounded"
                    alt="Bridging MATIC to Polygon network"
                  />
                </div>
              </div>
              Confirm the details of the transaction, and click "Send". You will
              have to confirm the transaction in MetaMask as well. Once the
              transaction is complete, you are ready to use your MATIC on
              Polygon!
            </div>
            <div className="mb-3" id="buy-matic">
              <h3 className="text-white myheaderFont">Buy MATIC</h3>
              If you want to buy MATIC directly and transfer it to your MetaMask
              wallet, this is a way to do so while paying minimal fees. Download
              the{" "}
              <a
                className="text-white"
                href={"https://crypto.com/us"}
                target="_blank"
                rel="noreferrer"
              >
                crypto.com
              </a>{" "}
              mobile app, create and verify your account. Find MATIC, then click
              "Buy MATIC".
              <div className="row d-flex justify-content-center my-2">
                <div className="col-md-4 col-sm col-8 mb-2 mb-md-0 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Crypto_1.PNG").default}
                    className="img-fluid rounded"
                    alt="Buy MATIC from Crypto.com"
                  />
                </div>
                <div className="col-md-4 col-sm col-8 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Crypto_3.PNG").default}
                    className="img-fluid rounded"
                    alt="Transfer MATIC from Crypto.com"
                  />
                </div>
              </div>
              Once purchased, on the homepage click "Transfer", then "Withdraw".
              Here we can transfer directly to our Polygon wallet, without
              having to use a bridge. Select "External Wallet", "MATIC", then
              enter your MetaMask wallet address. Be sure to select the
              "Polygon" network.
              <div className="row d-flex justify-content-center my-2">
                <div className="col-md-4 col-sm col-8 mb-2 mb-md-0 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Crypto_4.PNG").default}
                    className="img-fluid rounded"
                    alt="Buy MATIC from Crypto.com"
                  />
                </div>
                <div className="col-md-4 col-sm col-8 mb-2 mb-md-0 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Crypto_5.PNG").default}
                    className="img-fluid rounded"
                    alt="Buy MATIC from Crypto.com"
                  />
                </div>
                <div className="col-md-4 col-sm col-8 d-flex align-items-center">
                  <img
                    src={require("./assets/help_guide/Crypto_6.PNG").default}
                    className="img-fluid rounded"
                    alt="Transfer MATIC from Crypto.com"
                  />
                </div>
              </div>
              After you complete your transfer, you should see your MATIC in
              your MetaMask wallet!
              <br /> <br />
              If you found this guide helpful we would love for you to join the{" "}
              <Link to="/" className="text-white">
                Potato Club
              </Link>{" "}
              by minting your own, unique Potato Club NFT!
            </div>
          </div>
          <div className="col-lg"></div>
        </div>
        <Footer
          address={props.contractAddress}
          openseaCollection={props.collectionURL}
        ></Footer>
      </div>
    </div>
  );
}
