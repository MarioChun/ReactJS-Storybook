import React, { useState } from "react";
import ResetStyle from "./styles/ResetStyle";
import styled from "styled-components";
import Packbutton from "./components/pack/PackButton";
import PackCheckBox from "./components/pack/PackCheckBox";
import PackFrame from "./components/pack/PackFrame";
import Packinput from "./components/pack/PackInput";
import PackModal from "./components/pack/PackModal";
import BeerListPage from "./components/BeerList";
import UserListPage from "./components/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLevel1Page1 from "./pages/form-level/step1/index.page";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLevel1Page1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
