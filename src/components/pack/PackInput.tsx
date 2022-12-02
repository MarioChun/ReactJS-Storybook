import React from "react";
import Input from "../Input";

const Packinput = () => {
  return (
    <div>
      <h5 style={{ marginBottom: "5px" }}>default Type</h5>

      <Input placeHolder="Basic Usage" />

      <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>Size</h5>
      <Input placeHolder="Small size" textArea={false} size="sm" />
      <Input placeHolder="Middle size" textArea={false} size="md" />
      <Input placeHolder="Large size" textArea={false} size="lg" />

      <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>
        textArea & maxLength
      </h5>
      <Input placeHolder="Text Area" textArea={true} />
      <Input placeHolder="Max length : 5" textMaxtLength={5} />

      <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>icon</h5>
      <Input icon={true} placeHolder="Basic Icon" />
    </div>
  );
};

export default Packinput;
