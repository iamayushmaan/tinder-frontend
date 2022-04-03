import React from "react";
import "./swipeButtons.css";
import "font-awesome/css/font-awesome.min.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons container">
      <i
        className="fa fa-reply"
        style={{ fontSize: "1.25em", color: "#6c5ce7" }}
      ></i>
      <i
        className="fa fa-xing"
        style={{ fontSize: "1.25em", color: "#00b894" }}
      ></i>
      <i
        className="fa fa-star"
        style={{ fontSize: "1.25em", color: "#fdcb6e" }}
      ></i>
      <i
        className="fa fa-heart"
        style={{ fontSize: "1.25em", color: "#d63031" }}
      ></i>
      <i
        className="fa fa-bolt"
        style={{ fontSize: "1.25em", color: "#f0932b" }}
      ></i>
    </div>
  );
}

export default SwipeButtons;
