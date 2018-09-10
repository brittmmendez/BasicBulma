import React, { Component } from 'react';
import newLogo from '../static/bulma-logo.png';
// import "./debug.css"; 
import "../App.css"; 
import { Link } from "react-router-dom";


class BasicBulma extends Component {

  render() {
    return (
      <div className="item-inline">
          <section className="section is-paddingless">
        <div className="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li class="is-active"><Link to="/second-app" aria-current="page">Second App</Link></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* <figure className = "image level-right">
        <span className="icon is-large">
          <Link className="has-text-black" to='/'>
            <i class="fas fa-2x fa-home"></i>
          </Link>
        </span>
      </figure> */}

      <section className = "hero">
        <div className = "hero-body">
        <div className = "container">
          {/* <figure class="image is-128x128"> */}
          <figure className = " image center">
            <img src={newLogo} className="picStyle"/>
          </figure>
          </div>
        </div>
      </section>

      <section className = "section has-background-light">
      <div className = "container">
          <div className = "columns">
            <div className = "column">
            <article className = " media notification is-info">
              <figure className="media-left">
                <span className="icon is-medium">
                  <i className="fab fa-2x fa-css3-alt"></i>
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4"> Bulma? </h1>
                  <p className = "is-size-5">
                    Bulma is a modern CSS framework from @jgthms, based on Flexbox.
                    Using Bulma, we can describe our website's design using just classes. ᕕ( ᐛ )ᕗ
                  </p>
                </div>
              </div>
            </article>
            </div>

            <div className = "column">
            <article className = " media notification is-primary">
              <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fas fa-2x fa-align-justify"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4"> ...Flexbox? </h1>
                    <p className = "is-size-5">
                      Flexbox is a CSS spec that makes sectioning & aligning more natural.
                      We don't need to know Flexbox but it's how Bulma works behind-the-scenes. ⦤(^ー^)⦥
                    </p>
                    </div>
                </div>
              </article>
            </div>

            <div className = "column">
              <article className = " media notification is-warning">
                <figure className="media-left">
                  <span className="icon is-medium">
                    <i className="fas fa-2x fa-shield-alt"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4"> ....Classes? </h1>
                    <p className = "is-size-5">
                      Instead of writing CSS per-element, we can use predefined classes.
                      With enough classes, we can describe our website design using semantics. ٩(^ᴗ^)۶
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        </section>




        <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-warning">
                    <i className="fas fa-lg fa-columns"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Columns</h1>
                    <p className="subtitle is-size-5">
                      The power of <strong> Flexbox </strong>in a simple interface
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-info">
                    <i className="fab fa-lg fa-wpforms"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Form</h1>
                    <p className="subtitle is-size-5">
                      The indispensable <strong> form controls </strong> designed for maximum clarity
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-danger">
                    <i className="fas fa-lg fa-cubes"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Components</h1>
                    <p className="subtitle is-size-5">
                      Advanced multi-part Components with lots of possibilities
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="has-text-grey-light">
                    <i className="fas fa-lg fa-cogs"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Modifiers</h1>
                    <p className="subtitle is-size-5">
                      An <strong>easy-to-read</strong> naming system designed for humans
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-primary">
                    <i className="fas fa-lg fa-warehouse"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Layout</h1>
                    <p className="subtitle is-size-5">
                      Design the <strong>structure</strong> of your webpage with these CSS classes
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="media notification has-background-white">
                <figure className="media-left">
                  <span className="icon has-text-danger">
                    <i className="fas fa-lg fa-cube"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 class="title is-size-4">Elements</h1>
                    <p className="subtitle is-size-5">
                      Essential interface elements that only reuqire a <strong>single CSS class</strong>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    );
  }
}

export default BasicBulma;
