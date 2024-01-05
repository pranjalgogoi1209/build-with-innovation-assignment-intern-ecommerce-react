import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function SearchProducts({
  products,
  setSearchedProducts,
  clearFilter,
  setClearFilter,
}) {
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (products && productName.length !== 0) {
      const filteredProducts =
        products &&
        products.filter(product =>
          product.title.toLowerCase().includes(productName.toLowerCase())
        );
      setSearchedProducts(filteredProducts);
    }
  }, [productName]);

  // clear filter and searched product
  if (clearFilter) {
    document.querySelector(".search-bar").value = "";
  }
  const handleChange = e => {
    setProductName(e.target.value);
    setClearFilter(false);
  };

  return (
    <SearchProductsWrapper>
      <div className="Search">
        <input
          type="text"
          onChange={e => handleChange(e)}
          className="search-bar"
          placeholder="Search a product"
        />
      </div>
    </SearchProductsWrapper>
  );
}

const SearchProductsWrapper = styled.div`
  .Search {
    display: flex;
    justify-content: center;
    input {
      border: 0;
      padding: 1.2vw;
      width: 50vw;
      outline: none;
      border-radius: 1vw;
      font-size: 1.3vw;
      font-weight: bold;
    }
  }
`;
