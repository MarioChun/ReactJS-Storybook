import React from "react";
import Button from "./stories/components/Button";

function App() {
  return (
    <div className="App">
      <Button text="sm" designType="default" size="sm" />
      <Button text="nd" designType="default" size="md" />
      <Button text="lg" designType="default" size="lg" />
    </div>
  );
}

export default App;
