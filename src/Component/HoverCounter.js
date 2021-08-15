import React from "react";

export default class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div onMouseOver={incrementCount}>
        <h1>
          <span>Hovered {count} times</span>
        </h1>
      </div>
    );
  }
}
