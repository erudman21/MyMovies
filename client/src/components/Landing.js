import React from "react";

const Landing = () => {
  return (
    <div>
      <img
        src={require("./pictures/proj.jpg")}
        style={{ minWidth: "100%", minHeight: "100%", marginTop: "-1.3%" }}
        alt="projector pic"
      />
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <h1>MyMovies</h1>
        An online journal for moviephiles!
      </div>
    </div>
  );
};

export default Landing;
