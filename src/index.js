import React from "react";
import ReactDOM from "react-dom";

setInterval(() => {
  // Component
  function Clock() {
    return (
      <h1 className="heading">
        <span className="text">{new Date().toLocaleTimeString()}</span>
      </h1>
    );
  }

  ReactDOM.render(Clock(), document.getElementById("root"));
}, 1000);
