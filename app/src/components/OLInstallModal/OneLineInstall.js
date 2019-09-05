import React from "react";
import "./OneLineInstall.css";

function OLI() {
  return (
    <div id="ol-install" uk-modal>
      <div class="uk-modal-dialog">
        <button
          class="uk-modal-close-default"
          type="button"
          uk-icon="icon: close"
        ></button>
        <div class="uk-modal-header">
          <h1
            class="uk-modal-title uk-text-center "
            uk-icon="icon: bolt;ratio: 4;color: yellow"
            style={{ transform: "translate(225px, 10px)" }}
          ></h1>
          <h2 class="uk-modal-title uk-text-center">One Line Install</h2>
        </div>
        <div class="uk-modal-body">
          <h3 class="uk-title">Step 1</h3>
          <p>
            To get started, you should navigate to your project folder and open
            a terminal there.<br></br>
            <br></br>
            <code
              style={{
                padding: "8px",
                border: "1px solid #e6e6e6",
                borderRadius: "5px"
              }}
            >
              <span class="is-terminal-key">$</span> npm i yogurt-pot --save-dev
            </code>
          </p>
          <br></br>
          <h3 class="uk-title">Step 2</h3>
          <p>
            You can now configurate your Yogurt Pot instance. We have an example
            on our GitHub repository for React projects.<br></br>
            <br></br>
          </p>
        </div>
        <div class="uk-modal-footer uk-text-right">
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default OLI;
