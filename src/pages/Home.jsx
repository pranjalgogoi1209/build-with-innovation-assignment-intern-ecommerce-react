import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useProducts from "../useProducts";
import SearchProducts from "../components/SearchProducts";

export default function Home() {
  const navigate = useNavigate();
  const { products, isLoading } = useProducts();
  const [userDetails, setUserDetails] = useState();
  const [searchedProducts, setSearchedProducts] = useState();

  // getting userDetails from local host and storing it in userDetails state variable
  // if the userDetails not in local host then redirect to login page
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!localStorage.getItem("userDetails")) {
        navigate("/login");
      } else {
        setUserDetails(await JSON.parse(localStorage.getItem("userDetails")));
      }
    };
    fetchUserDetails();
  }, []);

  // display products function
  const displayProducts = product => {
    return (
      <div className="single-product" key={product.id}>
        <img src={product.thumbnail} width={200} height={200} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <small>Price: {product.price}rs</small>
        <br />
        <small>Rating: {product.rating}</small>
      </div>
    );
  };

  return (
    <HomeWrapper>
      <SearchProducts
        products={products}
        setSearchedProducts={setSearchedProducts}
      />
      <div className="products">
        {isLoading && <div>Loading... </div>}
        {products &&
          !searchedProducts &&
          products.map(product => displayProducts(product))}
        {searchedProducts &&
          searchedProducts.map(product => displayProducts(product))}
      </div>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  .products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .single-product {
      p {
        width: 20vw;
      }
    }
  }
`;
