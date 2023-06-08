import React from "react";
import { SpinningOrbitLoader } from "react-loaders-kit";

const loaderStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  margin: "auto auto",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
};

const headingStyle = {
  color: "#1460e5",
  fontSize: "1.5rem",
};

function Loader() {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 3,
    colors: ["#1460e5", "#1460e5", "#1460e5", "#1460e5"],
  };

  return (
    <div className="loader" style={loaderStyle}>
      <SpinningOrbitLoader {...loaderProps} />
      <h2 style={headingStyle}>MENPHIS</h2>
    </div>
  );
}

export default Loader;
