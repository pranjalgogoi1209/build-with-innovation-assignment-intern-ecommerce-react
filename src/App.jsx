import React, { useState } from "react";
import { Login, Home, SingleProduct, Cart } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useProducts from "./useProducts";
import { ProductsProvider } from "./context/ProductsProvider";

export default function App() {
  const { products, isLoading } = useProducts();
  const [cartProduct, setCartProduct] = useState({});
  console.log(cartProduct);
  return (
    <ProductsProvider value={{ products, isLoading }}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route
            path={"/single-product/:id"}
            element={<SingleProduct setCartProduct={setCartProduct} />}
          />
          <Route path={"/cart"} element={<Cart cartProduct={cartProduct} />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}
