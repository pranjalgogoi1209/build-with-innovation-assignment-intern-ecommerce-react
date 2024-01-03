import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function SearchProducts({ products, setSearchedProducts }) {
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (productName.length !== 0) {
      const filteredProducts =
        products &&
        products.filter(product =>
          product.title.toLowerCase().includes(productName.toLowerCase())
        );
      setSearchedProducts(filteredProducts);
    } else {
      setSearchedProducts(products);
    }
  }, [productName]);

  return (
    <SearchProductsWrapper>
      <input type="text" onChange={e => setProductName(e.target.value)} />
    </SearchProductsWrapper>
  );
}

const SearchProductsWrapper = styled.div``;
