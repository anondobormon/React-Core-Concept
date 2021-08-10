import React from "react";

class Clock extends React.component {
  render() {
    return (
      <h1 className="header">
        <span className="text">{new Date().toLocaleTimeString()}</span>
      </h1>
    );
  }
}
