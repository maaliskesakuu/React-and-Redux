import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter(counter + 1);
  };

  const minusHandler = () => {
    setCounter(counter - 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <div>
      <p>Total: {counter}</p>
      <button onClick={addHandler}>add</button>
      <button onClick={minusHandler}>remove</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
}

export default App;

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     counter: 0,
//   };

//   addHandler = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   minusHandler = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   resetHandler = () => {
//       this.setState({ counter: 0 });
//   };

//   render() {
//     return (
//       <div>
//         <p>total: {this.state.counter}</p>
//         <button onClick={this.addHandler}>add</button>
//         <button onClick={this.minusHandler}>remove</button>
//         <button onClick={this.resetHandler}>reset</button>
//       </div>
//     );
//   }
// }

// export default App;

// example from Redux with some additions
// import React, { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(prevCounter => prevCounter + 1);
//   };

//   const reduction = () => {
//     setCounter(prevCounter => prevCounter - 1);
//   };

//   const reset = () => {
//     setCounter(0)
//   }
//   return (
//     <div>
//       <p>Value: {counter}</p>
//       <button onClick={increment}>increment</button>
//       <button onClick={reduction}>reduct</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
// };

// export default App;
