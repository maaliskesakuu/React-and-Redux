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
        <div>
          <button onClick={this.props.onStoreResult}>Store result</button>
        </div>
        <ul>
          {this.props.storedResults.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: "INCREMENT" }),
    onDecCounter: () => dispatch({ type: "DECREASE" }),
    onAddFiveCounter: () => dispatch({ type: "ADDFIVE", value: 5 }),
    onDecFiveCounter: () => dispatch({ type: "REMOVEFIVE", value: 5 }),
    onResetCounter: () => dispatch({ type: "RESET" }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    // onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
