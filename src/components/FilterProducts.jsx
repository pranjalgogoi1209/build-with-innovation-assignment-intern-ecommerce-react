import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function FilterProducts({
  products,
  setPriceFilteredProducts,
  searchedProducts,
}) {
  const [priceRange, setPriceRange] = useState();

  useEffect(() => {
    if (searchedProducts && priceRange) {
      const filteredProducts =
        searchedProducts &&
        searchedProducts.filter(
          product =>
            priceRange.split("-")[0] < product.price &&
            priceRange.split("-")[1] > product.price
        );
      setPriceFilteredProducts(filteredProducts);
    } else if (products && priceRange) {
      const filteredProducts =
        products &&
        products.filter(
          product =>
            priceRange.split("-")[0] < product.price &&
            priceRange.split("-")[1] > product.price
        );
      setPriceFilteredProducts(filteredProducts);
    }
  }, [priceRange]);

  return (
    <FilterProductsWrapper>
      <form onChange={e => setPriceRange(e.target.value)}>
        <div>
          <label htmlFor="">
            <input type="radio" name="filter" id="" value={"0-50"} /> 0 - 50
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="radio" name="filter" id="" value={"51-100"} /> 51 - 100
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="radio" name="filter" id="" value={"101-500"} /> 101 -
            500
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="radio" name="filter" id="" value={"501-1000"} /> 501 -
            1000
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="radio" name="filter" id="" value={"1001-1500"} /> 1001
            - 1500
          </label>
        </div>
      </form>
    </FilterProductsWrapper>
  );
}

const FilterProductsWrapper = styled.div`
  width: 10vw;
`;
