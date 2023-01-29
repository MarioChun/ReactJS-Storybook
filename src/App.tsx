import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryBookPage from "./pages/story-book/index.page";
import GlobalStyle from "./styles/global-style";

import FormLevel1Page1 from "./pages/form-level/step1/index.page";
import FormLevelPageStudy from "./pages/form-level/study/index.page";

import CocktailListPage from "./components/ListPage/Cocktail";
import CoffeeListPage from "./components/ListPage/Coffee";

import UserListPageNew from "./components/UserList/Study/Step2";
import FormLevelPage from "./pages/form-level/study/index.page";
import Postion1 from "./pages/css-study/index.position.page.1";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/form-level" element={<FormLevel1Page1 />}></Route>
        </Routes>
        <Routes>
          <Route
            // path="/form-level-Study"
            path="/"
            element={<FormLevelPageStudy />}
          ></Route>
        </Routes>
        <Routes>
          <Route path="/css-study1" element={<Postion1 />}></Route>
        </Routes>
        <Routes>
          <Route path="/story-book" element={<StoryBookPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>

    //   <Overview>
    //     <PackFrame text="CSS Position Playground">
    //       <PackCssPostion />
    //     </PackFrame>
    //   </Overview>

    //  <Overview>
    //       <CocktailListPage />
    //     </Overview>

    //     <Overview>
    //       <CoffeeListPage />
    //     </Overview>

    //     <Overview>
    //       <UserListPage />
    //     </Overview>

    //     <Overview>
    //       <UserListPageNew />
    //     </Overview>
    //   </Container>
    // </>
  );
}

export default App;
