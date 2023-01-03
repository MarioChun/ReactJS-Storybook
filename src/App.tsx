import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Modal from "./components/Modal";
import Packbutton from "./components/pack/PackButton";
import PackCheckBox from "./components/pack/PackCheckBox";
import PackCssPostion from "./components/pack/PackCssPosition";
import PackFrame from "./components/pack/PackFrame";
import Packinput from "./components/pack/PackInput";
import ButtonStudy from "./components/ButtonStudy";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
font-family: 'Source Sans Pro', sans-serif;
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: 'Source Sans Pro', sans-serif;
}

a{
  text-decoration: none;
  color: inherit;
}
`;

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
      <GlobalStyle />
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
