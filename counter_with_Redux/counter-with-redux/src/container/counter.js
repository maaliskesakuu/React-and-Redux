import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score is: {this.props.counter}</h1>
        <button onClick={this.props.onIncCounter}>Increase</button>
        <button onClick={this.props.onDecCounter}>Decrease</button>
        <button onClick={this.props.onAddFiveCounter}>Add 5</button>
        <button onClick={this.props.onDecFiveCounter}>Remove 5</button>
        <button onClick={this.props.onResetCounter}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: "INCREMENT" }),
    onDecCounter: () => dispatch({ type: "DECREASE" }),
    onAddFiveCounter: () => dispatch({ type: "ADDFIVE", value: 5 }),
    onDecFiveCounter: () => dispatch({ type: "REMOVEFIVE", value:5 }),
    onResetCounter: () => dispatch({ type: "RESET" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
