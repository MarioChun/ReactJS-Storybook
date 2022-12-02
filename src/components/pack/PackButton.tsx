import React from "react";
import Button from "../Button";

function PackButton() {
  return (
    <div>
      <h5 style={{ marginBottom: "5px" }}>Type</h5>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Button
          text="primary"
          designType="primary"
          disabled={false}
          danger={false}
        />
        <Button
          text="defalut"
          designType="default"
          disabled={false}
          danger={false}
        />
        <Button
          text="dashed"
          designType="dashed"
          disabled={false}
          danger={false}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Button text="text" designType="text" disabled={false} danger={false} />
        <Button text="link" designType="link" disabled={false} danger={false} />
      </div>
      <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>
        Size & disabled
      </h5>
      <Button
        text="sm & disabled"
        designType="primary"
        size="sm"
        disabled={true}
        danger={false}
      />
      <Button
        text="md & disabled"
        designType="primary"
        size="md"
        disabled={true}
        danger={false}
      />
      <Button
        text="lg & disabled"
        designType="primary"
        size="lg"
        disabled={true}
        danger={false}
      />
    </div>
  );
}

export default PackButton;
