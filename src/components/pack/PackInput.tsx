import React from "react";
import styled from "styled-components";
import Input from "../input/Input";

const Container = styled.div`
  h5 {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 8px;
    margin-left: 5px;
  }

  div {
    display: flex;
    justify-content: left;
  }
`;

const Packinput = () => {
  return (
    <Container>
      <h5>default Type</h5>
      <Input placeholder="Basic Usage" />

      <h5>Size</h5>
      <Input placeholder="Small size" textArea={false} size="sm" />
      <Input placeholder="Middle size" textArea={false} size="md" />
      <Input placeholder="Large size" textArea={false} size="lg" />

      <h5>textArea & maxLength</h5>
      <Input placeholder="Text Area" textArea={true} />
      <Input placeholder="Max length : 5" textMaxtLength={5} />

      <h5>icon</h5>
      <Input icon={true} placeholder="Basic Icon" />
    </Container>
  );
};

export default Packinput;
