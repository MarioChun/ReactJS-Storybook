import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryBookPage from "./pages/story-book/index.page";
import GlobalStyle from "./styles/global-style";

import Postion1 from "./pages/css-study/index.position.page.1";
import CocktailListPage from "./pages/list-page/step1/index.page";
import FormLevelPage from "./pages/form-level/step1/index.page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLevelPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/css-study1" element={<Postion1 />}></Route>
        </Routes>
        <Routes>
          <Route path="/story-book" element={<StoryBookPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/cocktail-list" element={<CocktailListPage />}></Route>
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
