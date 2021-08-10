import React from "react";

const withCounter = (OriginalComponent) => {
  class newComponent extends React.Component {
    state = {
      count: 0,
    };
    incrementCounter = () => {
      this.setState((preState) => ({ count: preState.count + 1 }));
    };
    render() {
      const { count } = this.state;
      return (
        <OriginalComponent
          count={count}
          incrementCounter={this.incrementCounter}
        />
      );
    }
  }
  return newComponent;
};
export default withCounter;
