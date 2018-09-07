import React, { Component } from 'react';
// import "./debug.css"; 
import "../App.css"; 
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
    <div>
        <h1> Welcome to Bulma Course Practice </h1>
        <Link to="/basic-bulma">
        Basic Bulma
        </Link>
        {/* <Link to="/pads" onClick={this.closeNav}>
        
        </Link>
        <Link to="/pads" onClick={this.closeNav}>
        
        </Link> */}
    </div>
    );
  }
}

export default Home;
