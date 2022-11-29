import React from "react";
import Packbutton from "./components/Packbutton";
import PackFrame from "./components/PackFrame";
import "./scss/app.scss";
function App() {
  return (
    <div className="App">
      <div>
        <h1>React + TypeScript + Storybook</h1>
        <h3>Component implementation with Storybook.</h3>
      </div>
      <PackFrame text="Button" children={<Packbutton />} />
    </div>
  );
}

export default App;
