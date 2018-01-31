import React from "react";
import "./Main.css";

const Main = props =>
  <div
    className="main text-center"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
  </div>;

export default Main;
