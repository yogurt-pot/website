import React from "react";
import Nav from "../Nav/Nav";
import OLI from "../OLInstallModal/OneLineInstall";
import "./App.css";
import Main from "./../Main/Main";

function App() {
  return (
    <div id="app-mount" class="uk-dark">
      <Nav />
      <Main style={{ zIndex: "999999" }} />
      <OLI />
    </div>
  );
}

export default App;
