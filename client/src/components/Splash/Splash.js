import React from "react";
import background from "./group.JPG";

const Splash = ({ children }) =>
  <div style={{ height: 850, backgroundImage: `url(${background})`, backgroundSize: "cover" }} className="jumbotron">
    {children}
  </div>;

export default Splash;