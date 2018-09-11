

import React, { Component } from 'react';
// import "./debug.css"; 
import "../App.css"; 



class form extends Component {

  render() {
    return (
        <div>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"/>
                </div>
            </div>

            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This username is available</p>
                </div>

        </div>
    );
  }
}

export default form;
