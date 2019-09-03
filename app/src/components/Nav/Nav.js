import React from "react";
import "./Nav.css";
import logo from "../../logo.png";

function Nav() {
  return (
    <div class="NavToolbar">
      <nav class="uk-navbar-container uk-margin uk-navbar-center" uk-navbar>
        <div class="uk-navbar-left uk-navbar-padding-500">
          <a class="uk-navbar-item uk-logo">
            <img src={logo} alt="Yogurt Pot Logo" width="50"></img>
            &nbsp; Yogurt Pot
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
