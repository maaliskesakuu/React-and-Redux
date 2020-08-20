import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionType from '../actions';

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
            <li key={item.id} onClick={() => this.props.onDeleteOneResult(item.id)}>
              {item.value}
            </li>
          ))}
        </ul>
        <div>
          <button onClick={this.props.onDeleteResult}>
            Delete all results
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: actionType.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionType.DECREASE }),
    onAddFiveCounter: () => dispatch({ type: actionType.ADDFIVE, value: 5 }),
    onDecFiveCounter: () => dispatch({ type: actionType.REMOVEFIVE, value: 5 }),
    onResetCounter: () => dispatch({ type: actionType.RESET }),
    // onDeleteOneResult: () => dispatch({ type: actionType.DELETE, resultItem: id }),
    onStoreResult: (result) => dispatch({ type: actionType.STORE_RESULT, result: result }),
    onDeleteResult: () => dispatch({ type: actionType.DELETE_RESULT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
