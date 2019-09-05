import React from "react";
import "./Nav.css";
import logo from "../../logo.png";
import OLI from "./../OLInstallModal/OneLineInstall";

const openGithubRepo = () => {
  window.open("https://github.com/yogurt-pot/yogurt-pot");
};

const main = () => {
  window.location.href = "/";
};

function Nav() {
  return (
    <div class="NavToolbar">
      <nav class="uk-navbar-container uk-margin uk-navbar-center" uk-navbar>
        <div class="uk-navbar-left uk-navbar-padding-500">
          <a class="uk-navbar-item uk-logo " onClick={main}>
            <img src={logo} alt="Yogurt Pot Logo" width="50"></img>
            &nbsp; Yogurt Pot
          </a>
        </div>
        <div class="uk-navbar-right uk-navbar-padding-500">
          <ul class="uk-navbar-nav">
            <li>
              <a
                style={{ minHeight: "50px", borderRadius: "50px" }}
                id="oli-btn"
              >
                <span uk-icon="icon: bolt"></span>
                &nbsp;One line install
              </a>
            </li>
            &nbsp;&nbsp;
            <li>
              <a style={{ minHeight: "50px", borderRadius: "50px" }}>
                <span uk-icon="icon: file-text"></span>
                &nbsp;Docs
              </a>
            </li>
            &nbsp;&nbsp;
            <li>
              <a
                onClick={openGithubRepo}
                class="uk-button-default"
                style={{ minHeight: "50px", borderRadius: "50px" }}
              >
                <span uk-icon="icon: github-alt"></span>
                &nbsp;GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
