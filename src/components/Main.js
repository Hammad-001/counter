import "./Main.css";
import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleIncrement = (e) => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = (e) => {
    this.setState({ value: this.state.value - 1 });
  };

  handleReset = () => {
    this.setState({ value: 0 });
  };

  render() {
    return (
      <div className="border rounded border-dark br-2 p-4 border-dark">
        <h1>React Counter</h1>
        <h1>{this.state.value}</h1>
        <div className="d-block text-center">
          <button
            className="btn text-blue btn-primary m-2"
            name="increment"
            onClick={this.handleIncrement}
          >
            Increment
          </button>
          <button
            className="btn text-red btn-danger m-2"
            name="decrement"
            onClick={this.handleDecrement}
          >
            Decrement
          </button>
        </div>
        <div className="d-block text-center">
          <button
            className="btn text-green btn-secondary"
            name="neutral"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default Main;
