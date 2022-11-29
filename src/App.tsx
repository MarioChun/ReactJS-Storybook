import React from "react";
import Button from "./stories/components/Button";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          text="primary"
          designType="primary"
          size=""
          disabled={false}
          danger={false}
        />
        <Button
          text="defalut"
          designType="default"
          size=""
          disabled={false}
          danger={false}
        />
        <Button
          text="dashed"
          designType="dashed"
          size=""
          disabled={false}
          danger={false}
        />
        <Button
          text="text"
          designType="text"
          size=""
          disabled={false}
          danger={false}
        />
        <Button
          text="link"
          designType="link"
          size=""
          disabled={false}
          danger={false}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Button
          text="disabled"
          designType="default"
          size=""
          disabled={true}
          danger={false}
        />
        <Button
          text="not disabled"
          designType="default"
          size=""
          disabled={false}
          danger={false}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          text="primary"
          designType="primary"
          size=""
          disabled={false}
          danger={true}
        />
        <Button
          text="defalut"
          designType="default"
          size=""
          disabled={false}
          danger={true}
        />
        <Button
          text="dashed"
          designType="dashed"
          size=""
          disabled={false}
          danger={true}
        />
        <Button
          text="text"
          designType="text"
          size=""
          disabled={false}
          danger={true}
        />
        <Button
          text="link"
          designType="link"
          size=""
          disabled={false}
          danger={true}
        />
      </div>
      <div>
        <Button
          text="sm"
          designType="default"
          size="sm"
          disabled={false}
          danger={false}
        />
        <Button
          text="md"
          designType="default"
          size="md"
          disabled={false}
          danger={false}
        />
        <Button
          text="lg"
          designType="default"
          size="lg"
          disabled={false}
          danger={false}
        />
      </div>
    </div>
  );
}

export default App;
