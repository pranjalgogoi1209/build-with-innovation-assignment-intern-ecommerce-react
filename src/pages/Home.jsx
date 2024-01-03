import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useProducts from "../useProducts";
import SearchProducts from "../components/SearchProducts";

export default function Home() {
  const navigate = useNavigate();
  const products = useProducts();
  const [userDetails, setUserDetails] = useState();

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

  return (
    <HomeWrapper>
      <SearchProducts />
      <div className="products">
        {products &&
          products.map(product => (
            <div className="single-product">
              <img src={product.thumbnail} width={200} height={200} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <small>Price: {product.price}rs</small>
              <br />
              <small>Rating: {product.rating}</small>
            </div>
          ))}
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
