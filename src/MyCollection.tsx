import React, { useState, useEffect } from "react";

interface myImagesData {
  url: string;
  name: string;
}

export default function MyCollection(props: any) {
  const [collectionFound, setCollectionFound] = useState(false);
  const [allImages, setAllImages] = useState<JSX.Element[]>([]);
  const [imagesRender, setImagesRender] = useState<JSX.Element[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [showButtonText, setShowButtonText] = useState("Show All");

  async function checkData() {
    if ((await props.provider.getNetwork()).name !== props.desiredNetwork) {
      alert("Wrong network! Please switch to " + props.desiredNetwork + ".");
      return;
    }
    let balance = await props.contract.balanceOf(props.signer.getAddress());
    if (balance) {
      let ownerWallet = await props.contract.walletOfOwner(
        props.signer.getAddress()
      );
      let myImages: myImagesData[] = [];
      for (let i = 0; i < ownerWallet.length; i++) {
        let uri: string = await props.contract.tokenURI(ownerWallet[i]);
        const metadata = await fetch("https://ipfs.io/ipfs/" + uri.slice(7));
        const metadataJSON = await metadata.json();
        myImages.push({
          url: "https://ipfs.io/ipfs/" + metadataJSON.image.slice(7),
          name: metadataJSON.name,
        });
      }

      const imageList = myImages.map((item: myImagesData, index: number) => {
        let itemNum: string = item.url.slice(68, -4);
        return (
          <div
            className="col d-flex flex-column mb-3 align-items-center text-white"
            key={itemNum}
          >
            <a
              href={
                "https://testnets.opensea.io/assets/" +
                props.contractAddress +
                "/" +
                itemNum
              }
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.url}
                className="img-fluid rounded mb-1"
                alt="My Collection Item"
              />
            </a>
            {item.name}
          </div>
        );
      });

      setAllImages(imageList);
      setImagesRender(imageList.slice(0, 8));
      setCollectionFound(true);
    }
  }

  function clickShow() {
    if (showAll) {
      setImagesRender(allImages.slice(0, 8));
      setShowButtonText("Show All");
    } else {
      setImagesRender(allImages);
      setShowButtonText("Show Less");
    }
    setShowAll(!showAll);
  }

  useEffect(() => {
    if (Object.keys(props.contract).length !== 0) {
      checkData();
    }
  }, [props.contract]);

  if (collectionFound) {
    return (
      <div className="mb-3">
        <h2 className="text-white myheaderFont">My Collection</h2>
        <div className="row row-cols-md-4 mt-2">{imagesRender}</div>
        <div className="mt-2 d-flex justify-content-center">
          <button
            type="button"
            className="btn myaccent4 px-4 text-white"
            onClick={clickShow}
          >
            {showButtonText}
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
