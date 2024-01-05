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
          <label htmlFor="0-50">
            <input type="radio" name="filter" id="0-50" value={"0-50"} /> 0 - 50
          </label>
        </div>
        <div>
          <label htmlFor="51-100">
            <input type="radio" name="filter" id="51-100" value={"51-100"} /> 51
            - 100
          </label>
        </div>
        <div>
          <label htmlFor="101-500">
            <input type="radio" name="filter" id="101-500" value={"101-500"} />{" "}
            101 - 500
          </label>
        </div>
        <div>
          <label htmlFor="501-1000">
            <input
              type="radio"
              name="filter"
              id="501-1000"
              value={"501-1000"}
            />{" "}
            501 - 1000
          </label>
        </div>
        <div>
          <label htmlFor="1001-1500">
            <input
              type="radio"
              name="filter"
              id="1001-1500"
              value={"1001-1500"}
            />{" "}
            1001 - 1500
          </label>
        </div>
        <div>
          <label htmlFor="1501-2000">
            <input
              type="radio"
              name="filter"
              id="1501-2000"
              value={"1501-2000"}
            />{" "}
            1501 - 2000
          </label>
        </div>
      </form>
    </FilterProductsWrapper>
  );
}

const FilterProductsWrapper = styled.div`
  width: 15vw;
  form {
    display: flex;
    flex-direction: column;
    padding-left: 2vw;
    gap: 1vw;
    input,
    label {
      cursor: pointer;
    }
  }
`;
