import React from "react";

const HeroComponent = () => {
  return (
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="text-white">
          <h1 className="mb-3">Title</h1>
          <h4 className="mb-3">Description</h4>
          <a className="btn btn-outline-light btn-lg" href="#!" role="button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
