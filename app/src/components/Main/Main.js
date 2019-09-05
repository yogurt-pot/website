import React from "react";
import logo from "../../logo.png";
import "./Main.css";
import { openDocs } from "../Nav/Nav";

function Main() {
  return (
    <div
      class="uk-section uk-section-muted main-anim"
      style={{ marginTop: "-20px", display: "block" }}
    >
      <div class="uk-container">
        <h1 class="uk-text-center">
          <img
            src={logo}
            alt="Yogurt Pot Logo"
            width="150"
            class="darkmode-ignore"
          ></img>
        </h1>
        <h1 class="uk-text-center main-title">Yogurt Pot</h1>
        <h4 class="uk-text-center main-title">
          A nimble, fat-free bundler, with easy to implement APIs
        </h4>
        <h1 class="uk-text-center">
          <button
            class="uk-button uk-button-primary"
            style={{ cursor: "pointer" }}
            onClick={openDocs}
          >
            Learn more
          </button>
        </h1>
      </div>
    </div>
  );
}

export default Main;
