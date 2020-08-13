// import React, { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);

//   const addHandler = ()=> {
//     setCounter(counter + 1 );
//   };

//   const minusHandler = () => {
//     setCounter(counter - 1);
//   };

//   const resetHandler = () => {
//     if (counter > 0) {
//       setCounter(0);
//     }
//     if (counter < 0) {
//       setCounter(0)
//     }
//   };
//   return (
//     <div>
//       <p>Total: {counter}</p>
//       <button onClick={addHandler}>add</button>
//       <button onClick={minusHandler}>remove</button>
//       <button onClick={resetHandler}>reset</button>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  minusHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  resetHandler = () => {
    if (this.state.counter < 0) {
      this.setState({ counter: 0 });
    }
    if (this.state.counter > 0) {
      this.setState({ counter: 0 });
    }
  };

  render() {
    return (
      <div>
        <p>total: {this.state.counter}</p>
        <button onClick={this.addHandler}>add</button>
        <button onClick={this.minusHandler}>remove</button>
        <button onClick={this.resetHandler}>reset</button>
      </div>
    );
  }
}

export default App;
