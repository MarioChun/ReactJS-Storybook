import { PropsWithChildren } from "react";
import styled from "styled-components";

interface IFrameProps extends PropsWithChildren {
  text: string;
}

const Container = styled.div`
  h3 {
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

const PackFrame = ({ text, children }: IFrameProps) => {
  return (
    <Container>
      <h3>{text}</h3>
      {children}
    </Container>
  );
};

export default PackFrame;
