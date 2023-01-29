import Button from "../button/Button";
import styled from "styled-components";

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

function PackButton() {
  return (
    <Container>
      <h5>Type</h5>
      <div>
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
      <div>
        <Button text="text" designType="text" disabled={false} danger={false} />
        <Button text="link" designType="link" disabled={false} danger={false} />
      </div>
      <h5>Size & disabled</h5>
      <Button
        text="sm & disabled"
        designType="primary"
        size="small"
        disabled={true}
        danger={false}
      />
      <Button
        text="md & disabled"
        designType="primary"
        size="medium"
        disabled={true}
        danger={false}
      />
      <Button
        text="lg & disabled"
        designType="primary"
        size="large"
        disabled={true}
        danger={false}
      />
    </Container>
  );
}

export default PackButton;
