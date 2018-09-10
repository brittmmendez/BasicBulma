import React, { Component } from 'react';
// import "../debug.css"; 
import "../App.css"; 
import "../helpers.css"; 
import "../grid.css"; 
import { Link } from "react-router-dom";
import tesla from '../static/tesla.svg';

class ThirdApp extends Component {
  render() {
    return (
     <div>
		{/* <section className="section is-paddingless-horizontal">
			<div className="container grid">
				<nav className="breadcrumb grid-xl" aria-label="breadcrumbs">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li className="is-active"><Link to="third-app" aria-current="page">Tesla App</Link></li>
					</ul>
				</nav>
			</div>
		</section> */}


		<section className="hero is-fullheight">
			<nav class="hero-head">
				<div class="columns is-mobile is-marginless heading has-text-weight-bold">
					<div class="column left">
					<figure class="navbar-item image">
						<img id="fixed-img-height" src={tesla}/>
					</figure>
					</div>
					<div class="column center desktop">
						<p className="navbar-item has-text-black"> MODEL S </p>
						<p className="navbar-item has-text-black"> MODEL X </p>
						<p className="navbar-item has-text-black"> MODEL 3 </p>
						<p className="navbar-item has-text-white"> ROADSTER</p>
						<p className="navbar-item has-text-black"> ENERGY  </p>
					</div>
					<div class="column right">
						<p className="navbar-item has-text-black desktop"> SHOP     </p>
						<p className="navbar-item has-text-black desktop"> SIGN IN  </p>
						<figure className="navbar-item image center">
							<i id="fixed-ham-height" className="fas fa-bars has-text-black"></i>
						</figure>
					</div>
				</div>
			</nav>
			<header className="hero-body">
				<div className="single-spaced lower-header is-overlay has-text-centered"> 
					<h1 className="subtitle is-4 has-text-weight-light has-text-black"> Telsa </h1>
					<h2 className="title is-1 has-text-black"> Roadster </h2>
				</div>
			</header>

			<footer className="hero-foot center">
				<div id="grid">
					<div id="a" class="center-column">
						<p class="has-text-centered has-text-white">
							​The quickest car in the world, with record-setting<br/>
							acceleration, range and performance.
						</p>
					</div>
					<div id="b" class="center-column">
						<p class="title has-text-white">
							<i class="fas fa-tachometer-alt has-text-grey-light fixed-height"/>
							1.9<span class="is-size-5">s</span>
						</p>
						<p class="subtitle has-text-white is-7">0-60 mph</p>
					</div>
					<div id="c" class="center-column left-borader">
						<p class="title has-text-white"><span class="is-size-5">+</span>250<span class="is-size-5">mph</span></p>
						<p class="subtitle is-7 has-text-white">Top Speed</p>
					</div>
					<div id="d" class="center-column left-borader">
						<p class="title has-text-white"><span>620</span><span class="is-size-5">mi</span></p>
						<p class="subtitle is-7 has-text-white">Mile Range</p>
					</div>
					<div id="e" class="center-column">
						<a class="button is-danger is-inverted is-rounded is-outlined has-text-weight-bold">
							Reserve Now
						</a>
					</div>
				</div>
			</footer>
		</section>
    </div>
    );
  }
}

export default ThirdApp;
