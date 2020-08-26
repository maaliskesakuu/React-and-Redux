import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/Layout/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
