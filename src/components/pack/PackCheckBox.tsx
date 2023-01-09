import styled from "styled-components";
import CheckBox from "../checkbox/Checkbox";

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

const PackCheckBox = () => {
  return (
    <Container>
      <h5>default Type</h5>
      <CheckBox text="default checkBox" />
      <h5>Size</h5>
    </Container>
  );
};

export default PackCheckBox;
