import React, { useState } from "react";
import styled from "styled-components";
import { Login, Home, SingleProduct, Cart } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useProducts from "./useProducts";
import { ProductsProvider } from "./context/ProductsProvider";
import Navbar from "./components/Navbar";

export default function App() {
  const { products, isLoading } = useProducts();
  const [cartProduct, setCartProduct] = useState({});

  return (
    <AppWrapper>
      <ProductsProvider value={{ products, isLoading }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route
              path={"/single-product/:id"}
              element={<SingleProduct setCartProduct={setCartProduct} />}
            />
            <Route
              path={"/cart"}
              element={<Cart cartProduct={cartProduct} />}
            />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  padding: 0 2vw 0 2vw;
`;
