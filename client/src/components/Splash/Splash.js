import React from "react";
import background from "./group.JPG";
import logo from "./logoWhite.png";

const Splash = () =>
  <div style={{ height: 600, background: `linear-gradient(rgba(48,63,159, 0.5), rgba(48,63,159, 0.5)), url(${background})`, backgroundSize: "cover", margin: 0}}>
    <img style={{position: "absolute", top: "50%", left: "50%"}}src={logo}></img>
  </div>;

export default Splash;