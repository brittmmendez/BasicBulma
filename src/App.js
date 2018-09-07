import React, { Component } from 'react';
import BasicBulma from './Components/BasicBulma'
// import "./debug.css"; 
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter as Router} from "react-router-dom"; 


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
