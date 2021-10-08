import React from "react";

export default function Team() {
  return (
    <div>
      <h1 className="row px-5">The Team</h1>
      <div className="row pt-2 pb-5 d-flex justify-content-center">
        <div className="col-md-3 bg-warning d-flex justify-content-center">
          Matt
        </div>
        <div className="col-md-3 bg-success d-flex justify-content-center">
          Sam
        </div>
      </div>
    </div>
  );
}
