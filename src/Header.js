import React from "react";
import "./header.css";


const Header = () => {
  return (
    <header className="container">
      <i
        className="fa fa-user"
        style={{ fontSize: "2em", color: "#424242" }}
      ></i>
      <i
        className="fa fa-fire"
        style={{ fontSize: "2em", color: "#fe3c72" }}
      ></i>
      <i
        className="fa fa-comment"
        style={{ fontSize: "2em", color: "#424242" }}
      ></i>
    </header>
  );
};

export default Header;
