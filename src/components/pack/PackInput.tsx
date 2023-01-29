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
      <Input placeholder="Small size" size="small" />
      <Input placeholder="Middle size" size="default" />
      <Input placeholder="Large size" size="large" />

      <h5>textArea & maxLength</h5>
      <Input placeholder="Text Area" />
      <Input placeholder="Max length : 5" />

      <h5>icon</h5>
      <Input placeholder="Basic Icon" />
    </Container>
  );
};

export default Packinput;
