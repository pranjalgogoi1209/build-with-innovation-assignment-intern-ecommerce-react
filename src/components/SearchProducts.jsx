import React, { useState } from "react";
import styled from "styled-components";

export default function SearchProducts() {
  const [productName, setProductName] = useState();
  console.log(productName);
  return (
    <SearchProductsWrapper>
      <input type="text" onChange={e => setProductName(e.target.value)} />
    </SearchProductsWrapper>
  );
}

const SearchProductsWrapper = styled.div``;
