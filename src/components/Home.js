import React, { Component } from 'react';
// import "./debug.css"; 
import "../App.css"; 
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div>
        <div className = "hero-body">
          <div className = "container has-text-centered">
            <h1 className="is-large"> Welcome to Bulma Course Practice </h1>
          </div>
        </div>
        <section className = "section is-paddingless">
          <div className = "container">
            <Link to="/basic-bulma"> Basic Bulma </Link> <br/>
            <Link to="/second-app"> Second App </Link> <br/>
            <Link to="/third-app"> Third App </Link> <br/>
            <Link to="/youtube-follow-along"> YouTube Follow Along </Link> <br/>
            <Link to="/form"> Form </Link>

          </div>
        </section>
      </div>
    );
  }
}

export default Home;
