import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import SearchProducts from "../components/SearchProducts";
import FilterProducts from "../components/FilterProducts";
import { useProductContext } from "../context/ProductsProvider";

export default function Home() {
  const { products, isLoading } = useProductContext();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [searchedProducts, setSearchedProducts] = useState();
  const [priceFilteredProducts, setPriceFilteredProducts] = useState();
  const [clearFilter, setClearFilter] = useState(false);

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
        <Link to={`/single-product/${product.id}`}>
          <div className="container">
            <img src={product.thumbnail} />
            <h1>CHECKOUT</h1>
          </div>
          <div className="content">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <small>Price: {product.price}rs</small>
            <br />
            <small>Rating: {product.rating}</small>
          </div>
        </Link>
      </div>
    );
  };

  // handleClear function
  const handleClear = () => {
    setSearchedProducts(undefined);
    setPriceFilteredProducts(undefined);
    setClearFilter(true);
  };

  return (
    <HomeWrapper>
      <div className="Home">
        <div className="filter">
          <FilterProducts
            products={products}
            setPriceFilteredProducts={setPriceFilteredProducts}
            searchedProducts={searchedProducts}
          />
        </div>

        <div className="main">
          <div className="home-headers">
            <SearchProducts
              products={products}
              setSearchedProducts={setSearchedProducts}
              clearFilter={clearFilter}
              setClearFilter={setClearFilter}
            />
            <span onClick={handleClear}>Clear Searches & Filters</span>
          </div>
          <div className="products">
            {isLoading && (
              <img
                src="https://shortpixel.com/img/spinner2.gif"
                className="loader"
              />
            )}
            {products &&
              !searchedProducts &&
              !priceFilteredProducts &&
              products.map(product => displayProducts(product))}

            {searchedProducts &&
              !priceFilteredProducts &&
              searchedProducts.map(product => displayProducts(product))}

            {priceFilteredProducts &&
              priceFilteredProducts.map(product => displayProducts(product))}
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  .Home {
    display: flex;
    justify-content: space-between;
    .main {
      width: 85vw;
      .home-headers {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vw;
        padding: 0 2vw 2vw 2vw;
        span {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .products {
        display: flex;
        justify-content: center;
        gap: 5vw;
        flex-wrap: wrap;
        padding-bottom: 2vw;

        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 15vh;
          height: 15vh;
        }

        .single-product {
          background-color: #d4dbeb;
          position: relative;
          border-radius: 1vw;
          a {
            text-decoration: none;
          }
          img {
            height: 13vw;
            width: 22vw;
            border-radius: 1vw;
            opacity: 1;
            transition: 0.5s ease;
          }
          h1 {
            color: #212121;
            padding: 0.5vw;
            text-align: center;
            background-color: #d4dbeb;
            position: absolute;
            top: 20%;
            left: 15%;
            border-radius: 0.5vw;
            opacity: 0;
            transition: 0.5s ease;
          }

          &:hover img {
            opacity: 0.3;
          }
          &:hover h1 {
            opacity: 1;
          }

          .content {
            padding: 1vw;
          }
          h2 {
            color: #212121;
            width: 20vw;
          }
          p {
            margin-top: 0.5vw;
            width: 20vw;
            text-align: justify;
            color: #212121;
          }
          small {
            color: #212121;
          }
        }
      }
    }
  }
`;
