import React, { useState, useEffect } from "react";

interface myImagesData {
  url: string;
  name: string;
}

export default function MyCollection(props: any) {
  const [collectionFound, setCollectionFound] = useState(false);
  const [imagesRender, setImagesRender] = useState<JSX.Element[]>([]);

  async function checkData() {
    if ((await props.provider.getNetwork()).name !== props.desiredNetwork) {
      alert("Wrong network! Switch to " + props.desiredNetwork + ".");
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

      const imageList = myImages.map((item: myImagesData) => {
        return (
          <div
            className="col d-flex flex-column mb-3 align-items-center text-white"
            key={item.url.slice(68, 69)}
          >
            <img
              src={item.url}
              className="img-fluid rounded mb-1"
              alt="My Collection Item"
            />
            {item.name}
          </div>
        );
      });
      setImagesRender(imageList);
      setCollectionFound(true);
    }
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
      </div>
    );
  } else {
    return <div></div>;
  }
}
