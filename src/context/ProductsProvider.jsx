import React, { createContext, useContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ProductsContext.Provider;

export function useProductContext() {
  return useContext(ProductsContext);
}
