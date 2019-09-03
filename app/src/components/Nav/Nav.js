import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div class="NavToolbar">
      <nav class="uk-navbar-container uk-margin" uk-navbar>
        <div class="uk-navbar-left uk-navbar-padding-500">
          <a class="uk-navbar-item uk-logo" href="#">
            Logo
          </a>

          <ul class="uk-navbar-nav">
            <li>
              <a href="#">
                <span
                  class="uk-icon uk-margin-small-right"
                  uk-icon="icon: star"
                ></span>
                Features
              </a>
            </li>
          </ul>

          <div class="uk-navbar-item">
            <div>
              Some <a href="#">Link</a>
            </div>
          </div>

          <div class="uk-navbar-item">
            <form action="javascript:void(0)">
              <input
                class="uk-input uk-form-width-small"
                type="text"
                placeholder="Input"
              ></input>
              <button class="uk-button uk-button-default">Button</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
