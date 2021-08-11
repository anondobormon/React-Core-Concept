import React from "react";

// Clock is an class component

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.tick();
    });
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <h1>
        <span>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}
export default Clock;
