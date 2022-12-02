import React from "react";
import Input from "../Input";

const Packinput = () => {
  return (
    <div>
      <h5 style={{ marginBottom: "5px" }}>default Type</h5>

      <Input placeholder="Basic Usage" />

      <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>Size</h5>
      <Input placeholder="Small size" textArea={false} size="sm" />
      <Input placeholder="Middle size" textArea={false} size="md" />
      <Input placeholder="Large size" textArea={false} size="lg" />

      <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>
        textArea & maxLength
      </h5>
      <Input placeholder="Text Area" textArea={true} />
      <Input placeholder="Max length : 5" textMaxtLength={5} />

      <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>icon</h5>
      <Input icon={true} placeholder="Basic Icon" />
    </div>
  );
};

export default Packinput;
