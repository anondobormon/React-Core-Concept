import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { render } = this.props;
    const { count } = this.state;
    return render(count, this.incrementCount);
  }
}
export default Counter;
