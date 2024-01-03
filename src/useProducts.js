import React, { useState, useEffect } from "react";

export default function useProducts() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setIsLoading(false);
      });
  }, []);
  return { products, isLoading };
}
