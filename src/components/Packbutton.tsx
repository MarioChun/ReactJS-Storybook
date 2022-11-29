import React from "react";
import Button from "./Button";

function Packbutton() {
  return (
    <div>
      <h5 style={{ marginBottom: "5px" }}>Type</h5>
      <div style={{ display: "flex", justifyContent: "left" }}>
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
      </div>
      <div style={{ display: "flex", justifyContent: "left" }}>
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
      <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>Size</h5>
      <Button
        text="sm"
        designType="primary"
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
        designType="dashed"
        size="lg"
        disabled={false}
        danger={false}
      />
    </div>
  );
}

export default Packbutton;
