import React from "react";
import Packbutton from "./components/Packbutton";
import PackFrame from "./components/PackFrame";
import Packinput from "./components/PackInput";
import "./scss/app.scss";
function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>React + TypeScript + Storybook</h1>
        <h3>Component implementation with Storybook.</h3>
      </div>
      <PackFrame text="Button" children={<Packbutton />} />
      <PackFrame text="Input" children={<Packinput />} />
    </div>
  );
}

export default App;
