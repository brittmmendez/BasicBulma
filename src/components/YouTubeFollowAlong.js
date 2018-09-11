import React, { Component } from 'react';
import newLogo from '../static/bulma-logo.png';
// import "./debug.css"; 
import "../App.css"; 
import { Link } from "react-router-dom";


class YouTubeFollowAlong extends Component {

  render() {
    return (
      <div>
  <div class="container">
    {/* <!-- HEADINGS --> */}
    <div class="block">
      <h1 class="title">Hello World</h1>
      <h2 class="subtitle">Hello World</h2>
      {/* <!-- Sizes --> */}
      <h1 class="title is-1">Hello World</h1>
      <h2 class="title is-2">Hello World</h2>
      <h3 class="title is-3">Hello World</h3>
      <h4 class="title is-4">Hello World</h4>
      <h5 class="title is-5">Hello World</h5>
      <h6 class="title is-6">Hello World</h6>
    </div>

    {/* <!-- CONTENT --> */}
    <div class="block">
      <p class="content is-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, rerum?</p>
      <p class="content is-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, rerum?</p>
      <p class="content is-large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, rerum?</p>
    </div>

    {/* <!-- BUTTONS --> */}
    <div class="block">
      <button class="button">Button</button>
      <button class="button is-white">Button</button>
      <button class="button is-light">Button</button>
      <button class="button is-dark">Button</button>
      <button class="button is-black">Button</button>
      <button class="button is-link">Button</button>
    </div>
    <div class="block">
      <a href="" class="button is-primary">Primary</a>
      <a href="" class="button is-info">Info</a>
      <a href="" class="button is-success">Success</a>
      <a href="" class="button is-warning">Warning</a>
      <a href="" class="button is-danger">Danger</a>
    </div>
    <div class="block">
      <a href="" class="button is-primary is-small">Primary</a>
      <a href="" class="button is-info is-medium">Info</a>
      <a href="" class="button is-success is-large">Success</a>
    </div>
    <div class="block">
      <a href="" class="button is-primary is-outlined">Primary</a>
      <a href="" class="button is-info is-outlined">Info</a>
      <a href="" class="button is-success is-outlined">Success</a>
      <a href="" class="button is-warning is-outlined">Warning</a>
      <a href="" class="button is-danger is-outlined">Danger</a>
    </div>
    <div class="block">
      <a href="" class="button is-primary is-inverted">Primary</a>
      <a href="" class="button is-info is-inverted">Info</a>
      <a href="" class="button is-success is-inverted">Success</a>
      <a href="" class="button is-warning is-inverted">Warning</a>
      <a href="" class="button is-danger is-inverted">Danger</a>
    </div>
    <div class="block">
      <a href="" class="button is-hovered">Hovered</a>
      <a href="" class="button is-focused">Focused</a>
      <a href="" class="button is-active">Active</a>
      <a href="" class="button is-loading">Loading</a>
      <a href="" class="button" disabled>Disabled</a>
    </div>

    {/* <!-- BOX --> */}
    <div class="block">
      <div class="box">
        <h1 class="title">Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, quia.</p>
      </div>
    </div>

    {/* <!-- NOTIFICATIONS--> */}
    <div class="block">
      <div class="notification">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quisquam!
      </div>
      <div class="notification is-primary">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quisquam!
      </div>
      <div class="notification is-info">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quisquam!
      </div>
      <div class="notification is-success">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quisquam!
      </div>
      <div class="notification is-warning">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quisquam!
      </div>
      <div class="notification is-danger">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quisquam!
      </div>
    </div>

    {/* <!-- TAGS --> */}
    <div class="block">
      <span class="tag">Hello</span>
      <span class="tag is-black">Black</span>
      <span class="tag is-dark">Dark</span>
      <span class="tag is-light">Light</span>
      <span class="tag is-white">White</span>
      <span class="tag is-primary">Primary</span>
      <span class="tag is-info">Info</span>
      <span class="tag is-success">Success</span>
      <span class="tag is-warning is-medium">Warning</span>
      <span class="tag is-danger is-large">Danger <button class="delete"></button></span>
    </div>

    {/* <!-- MESSAGES --> */}
    <div class="block">
      <article class="message">
        <div class="message-header">
          <p>About Us</p>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi, facilis laudantium eaque repudiandae optio asperiores quos cumque minus, officia at necessitatibus soluta ut odit incidunt sint blanditiis obcaecati inventore.
        </div>
      </article>

      <article class="message is-primary">
        <div class="message-header">
          <p>About Us</p>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi, facilis laudantium eaque repudiandae optio asperiores quos cumque minus, officia at necessitatibus soluta ut odit incidunt sint blanditiis obcaecati inventore.
        </div>
      </article>

      <article class="message is-success">
        <div class="message-header">
          <p>About Us</p>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi, facilis laudantium eaque repudiandae optio asperiores quos cumque minus, officia at necessitatibus soluta ut odit incidunt sint blanditiis obcaecati inventore.
        </div>
      </article>

      <article class="message is-info">
        <div class="message-header">
          <p>About Us</p>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi, facilis laudantium eaque repudiandae optio asperiores quos cumque minus, officia at necessitatibus soluta ut odit incidunt sint blanditiis obcaecati inventore.
        </div>
      </article>

      <article class="message is-warning">
        <div class="message-header">
          <p>About Us</p>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi, facilis laudantium eaque repudiandae optio asperiores quos cumque minus, officia at necessitatibus soluta ut odit incidunt sint blanditiis obcaecati inventore.
        </div>
      </article>

      <article class="message is-danger">
        <div class="message-header">
          <p>About Us</p>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi, facilis laudantium eaque repudiandae optio asperiores quos cumque minus, officia at necessitatibus soluta ut odit incidunt sint blanditiis obcaecati inventore.
        </div>
      </article>
    </div>

    {/* <!-- NAVBAR --> */}
    <div class="block">
      <nav class="nav">
        <div class="nav-left">
          <a href="" class="nav-item">
            <h1 class="title is-4">Traversy Media</h1>
          </a>
        </div>

        <div class="nav-center">
          <a href="" class="nav-item">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
          </a>
          <a href="" class="nav-item">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
          </a>
        </div>

        <div class="nav-right nav-menu">
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">About Us</a>
          <a href="#" class="nav-item">Contact</a>
        </div>
      </nav>
    </div>

    {/* <!-- SIDE MENU --> */}
    <div class="block">
      <aside class="menu">
        <p class="menu-label">
          Label 1
        </p>
        <ul class="menu-list">
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 1</a></li>
        </ul>
        <p class="menu-label">
          Label 2
        </p>
        <ul class="menu-list">
          <li>
            <a class="is-active" href="">Link 1</a>
            <ul>
              <li><a href="">Link 1</a></li>
              <li><a href="">Link 1</a></li>
              <li><a href="">Link 1</a></li>
            </ul>
          </li>

          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
        </ul>
      </aside>
    </div>

    {/* <!-- HERO --> */}
    <div class="block">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hero Title</h1>
            <h2 class="subtitle">Hero Subtitle</h2>
          </div>
        </div>
      </section>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hero Title</h1>
            <h2 class="subtitle">Hero Subtitle</h2>
          </div>
        </div>
      </section>
      <section class="hero is-success">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hero Title</h1>
            <h2 class="subtitle">Hero Subtitle</h2>
          </div>
        </div>
      </section>
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hero Title</h1>
            <h2 class="subtitle">Hero Subtitle</h2>
          </div>
        </div>
      </section>
      <section class="hero is-warning">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hero Title</h1>
            <h2 class="subtitle">Hero Subtitle</h2>
          </div>
        </div>
      </section>
      <section class="hero is-danger">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hero Title</h1>
            <h2 class="subtitle">Hero Subtitle</h2>
          </div>
        </div>
      </section>
    </div>

    {/* <!-- CARD --> */}
    <div class="block">
      <div class="card">
        <div class="card-content">
          <p class="title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, adipisci.
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              <a href=""><i class="fa fa-twitter"></i>Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              <a href=""><i class="fa fa-facebook"></i>Facebook</a>
            </span>
          </p>
        </footer>
      </div>
    </div>

    {/* <!-- PAGINATION --> */}
    <div class="block">
      <nav class="pagination">
        <a href="" class="pagination-previous" disabled>Previous</a>
        <a href="" class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a href="" class="pagination-link is-current">1</a>
          </li>
          <li>
            <a href="" class="pagination-link">2</a>
          </li>
          <li>
            <a href="" class="pagination-link">3</a>
          </li>
        </ul>
      </nav>
    </div>

    {/* <!-- LEVEL --> */}
    <div class="block">
      <nav class="level">
        {/* <!-- left side --> */}
        <div class="level-left">
          <p class="level-item"><a><strong>All</strong></a></p><p class="level-item"><a>Published</a></p>
          <p class="level-item"><a>Draft</a></p>
          <p class="level-item"><a>Deleted</a></p>
          <p class="level-item"><a class="button is-primary">New</a></p>
        </div>

        {/* <!-- right side --> */}
        <div class="level-right">
          <div class="level-item">
            <div class="field">
              <p class="control">
                <input type="text" class="input" placeholder="Search posts..."/>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>

    {/* <!-- FORMS --> */}
    <div class="block">
      <form>
        <div class="field">
          <label class="label">Name</label>
          <input type="text" class="input" placeholder="Enter Name"/>
        </div>

        <div class="field">
          <label class="label">Name</label>
          <input type="text" class="input is-success" placeholder="Enter Name"/>
        </div>

        <div class="field">
          <label class="label">Name</label>
          <input type="text" class="input is-danger" placeholder="Enter Name"/>
        </div>

        <div class="field">
          <label class="label">Package</label>
          <p class="control">
            <span class="select">
              <select>
                <option>Select dropdown</option>
                <option>Simple</option>
                <option>Standard</option>
                <option>Super</option>
              </select>
            </span>
          </p>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <p class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </p>
        </div>
      </form>
    </div>

    {/* <!-- ATTACHED --> */}
    <div class="block">
      <div class="field has-addons">
        <p class="control">
          <input type="text" class="input" placeholder="Enter keywords..."/>
        </p>
        <p class="control">
          <a href="" class="button is-info">Search</a>
        </p>
      </div>
    </div>

    <div class="block">
      <div class="field has-addons">
        <p class="control">
          <span class="select">
            <select>
              <option>$</option>
              <option>£</option>
              <option>€</option>
            </select>
          </span>
        </p>
        <p class="control">
          <input type="text" class="input" placeholder="Enter amount"/>
        </p>
        <p class="control">
          <a href="" class="button is-info">Pay</a>
        </p>
      </div>
    </div>

    {/* <!-- TABLES --> */}
    <div class="block">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rick Grimes</td>
            <td>rgrimes@gmail.com</td>
            <td>555-555-5555</td>
          </tr>
          <tr class="is-selected">
            <td>Daryl Dixon</td>
            <td>daryl@gmail.com</td>
            <td>112-334-5566</td>
          </tr>
          <tr>
            <td>Glen Rhee</td>
            <td>glen@gmail.com</td>
            <td>333-444-5555</td>
          </tr>
          <tr>
            <td>Carol Peletier</td>
            <td>carol@gmail.com</td>
            <td>343-344-5543</td>
          </tr>
        </tbody>
      </table>

      <table class="table is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rick Grimes</td>
            <td>rgrimes@gmail.com</td>
            <td>555-555-5555</td>
          </tr>
          <tr>
            <td>Daryl Dixon</td>
            <td>daryl@gmail.com</td>
            <td>112-334-5566</td>
          </tr>
          <tr>
            <td>Glen Rhee</td>
            <td>glen@gmail.com</td>
            <td>333-444-5555</td>
          </tr>
          <tr>
            <td>Carol Peletier</td>
            <td>carol@gmail.com</td>
            <td>343-344-5543</td>
          </tr>
        </tbody>
      </table>

      <table class="table is-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rick Grimes</td>
            <td>rgrimes@gmail.com</td>
            <td>555-555-5555</td>
          </tr>
          <tr>
            <td>Daryl Dixon</td>
            <td>daryl@gmail.com</td>
            <td>112-334-5566</td>
          </tr>
          <tr>
            <td>Glen Rhee</td>
            <td>glen@gmail.com</td>
            <td>333-444-5555</td>
          </tr>
          <tr>
            <td>Carol Peletier</td>
            <td>carol@gmail.com</td>
            <td>343-344-5543</td>
          </tr>
        </tbody>
      </table>

      <table class="table is-narrow is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rick Grimes</td>
            <td>rgrimes@gmail.com</td>
            <td>555-555-5555</td>
          </tr>
          <tr>
            <td>Daryl Dixon</td>
            <td>daryl@gmail.com</td>
            <td>112-334-5566</td>
          </tr>
          <tr>
            <td>Glen Rhee</td>
            <td>glen@gmail.com</td>
            <td>333-444-5555</td>
          </tr>
          <tr>
            <td>Carol Peletier</td>
            <td>carol@gmail.com</td>
            <td>343-344-5543</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* <!-- GRID SYSTEM --> */}
    <div class="block">
      <div class="columns">
        <div class="column">
          <p class="notification">First Column</p>
        </div>
        <div class="column">
          <p class="notification">Second Column</p>
        </div>
        <div class="column">
          <p class="notification">Third Column</p>
        </div>
        <div class="column">
          <p class="notification">Fourth Column</p>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="columns">
        <div class="column is-2">
          <p class="notification">2 column</p>
        </div>
        <div class="column is-8">
          <p class="notification">8 Column</p>
        </div>
        <div class="column is-2">
          <p class="notification">2 Column</p>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="columns">
        <div class="column is-three-quarters">
          <p class="notification">is-three-quarters</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="columns">
        <div class="column is-two-thirds">
          <p class="notification">is-two-thirds</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="columns">
        <div class="column is-half">
          <p class="notification">is-half</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
    </div>

  </div>
      </div>
    );
  }
}

export default YouTubeFollowAlong;
