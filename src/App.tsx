import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryBookPage from "./pages/story-book/index.page";
import GlobalStyle from "./styles/global-style";

import Postion1 from "./pages/css-study/index.position.page.1";
import CocktailListPage from "./pages/list-page/step1/index.page";
import FormLevelPage from "./pages/form-level/step1/index.page";
import ProductNewPage from "./pages/form-level/step2/pages/new/productsNew.page";
import ProductPage from "./pages/form-level/step2/pages/products/products.page";
import ProductUdatePage from "./pages/form-level/step2/pages/update/productsUpdate.page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLevelPage />}></Route>
          <Route path="/css-study1" element={<Postion1 />}></Route>
          <Route path="/story-book" element={<StoryBookPage />}></Route>
          <Route path="/cocktail-list" element={<CocktailListPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/products/new" element={<ProductNewPage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/products/:id" element={<ProductUdatePage />}></Route>
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
