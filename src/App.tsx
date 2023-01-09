import React, { useState } from "react";
import ResetStyle from "./styles/ResetStyle";
import styled, { createGlobalStyle } from "styled-components";
import Modal from "./components/Modal";
import Packbutton from "./components/pack/PackButton";
import PackCheckBox from "./components/pack/PackCheckBox";
import PackCssPostion from "./components/pack/PackCssPosition";
import PackFrame from "./components/pack/PackFrame";
import Packinput from "./components/pack/PackInput";
import ButtonStudy from "./components/ButtonStudy";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Header = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 50px;
    font-weight: 400;
    font-size: 32px;
  }
  h3 {
    font-size: 20px;
  }
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border: solid;
  padding: 20px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ResetStyle />
      <Container>
        <Header>
          <h1>React + TypeScript + Storybook</h1>
          <h3>Component implementation with Storybook.</h3>
        </Header>
        <Overview>
          <PackFrame text="Button">
            <Packbutton />
          </PackFrame>
        </Overview>

        <Overview>
          <PackFrame text="Input">
            <Packinput />
          </PackFrame>
        </Overview>

        <Overview>
          <PackFrame text="Checkbox">
            <PackCheckBox />
          </PackFrame>
        </Overview>

        {/* <Overview>
          <PackFrame text="CSS Position Playground">
            <PackCssPostion />
          </PackFrame>
        </Overview> */}

        <Overview>
          <PackFrame text="Modal">
            <ButtonStudy
              text="Modal"
              // onClick={() => alert("modal click")}
              onClick={handleOpen}
            ></ButtonStudy>

            {isOpen && (
              <Modal onClose={handleClose}>
                <div>모달제목</div>
                <div>모달내용...</div>
              </Modal>
            )}
          </PackFrame>
        </Overview>
      </Container>
    </>
  );
}

export default App;
