import React from "react";
import Button_study from "./components/Button_study";

function App() {
  return (
    <div className="App">
      <Button_study text="sm" designType="default" size="sm" />
      <Button_study text="nd" designType="default" size="md" />
      <Button_study text="lg" designType="default" size="lg" />
    </div>
  );
}

export default App;
