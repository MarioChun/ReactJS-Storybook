import React from "react";
import Packbutton from "./components/pack/PackButton";
import PackCheckBox from "./components/pack/PackCheckBox";
import PackFrame from "./components/pack/PackFrame";
import Packinput from "./components/pack/PackInput";
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
      <PackFrame text="Checkbox" children={<PackCheckBox />} />
    </div>
  );
}

export default App;
