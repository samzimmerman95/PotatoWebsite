import React from "react";

export default function Title() {
  return (
    <div className="row py-5">
      <div className="col-md-7 text-white">
        <h1 className="">Potato Club</h1>
        <div>
          Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Mattis pellentesque id nibh tortor id aliquet. Urna et pharetra
          pharetra massa massa ultricies. Tellus cras adipiscing enim eu.
        </div>
      </div>
      <div className="col-md-5 d-flex justify-content-end">
        <img
          src={require("./assets/team/sam.png").default}
          className="img-fluid rounded"
          alt="GIF"
        />
      </div>
    </div>
  );
}
