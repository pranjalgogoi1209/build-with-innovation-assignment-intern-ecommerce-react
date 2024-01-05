import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";

export default function SingleProduct({ setCartProduct }) {
  const [productCount, setProductCount] = useState();
  const navigate = useNavigate();
  const { products } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    productCount && id && setCartProduct({ id, productCount });
  }, [productCount]);

  let singleProduct =
    products && products.filter(product => product.id === Number(id));

  const handleAddToCart = () => {
    navigate("/cart");
  };
  console.log(singleProduct);
  return (
    <SingleProductWrapper>
      <div className="SingleProduct">
        {products && (
          <div className="product">
            <h1>{singleProduct[0].title}</h1>
            <h3>Brand: {singleProduct[0].brand}</h3>
            <img src={singleProduct[0].thumbnail} className="thumbnail" />
            <p>{singleProduct[0].description}</p>
            <strong>Price: {singleProduct[0].price}</strong>
            <p>Rating: {singleProduct[0].rating}</p>
            <p>Stock: {singleProduct[0].stock}</p>
            <p>Category: {singleProduct[0].category}</p>
            <div className="single-img">
              {singleProduct[0].images.map(img => (
                <img src={img} width={100} height={100} key={img} />
              ))}
            </div>
          </div>
        )}

        <div className="add-cart">
          <button onClick={handleAddToCart}>Add To Cart</button>
          <input
            type="number"
            defaultValue={1}
            onChange={e => setProductCount(e.target.value)}
          />
        </div>
      </div>
    </SingleProductWrapper>
  );
}

const SingleProductWrapper = styled.div`
  padding-bottom: 2vw;
  .SingleProduct {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2vw;

    .product {
      display: flex;
      flex-direction: column;
      gap: 2vw;
      .thumbnail {
        border-radius: 1vw;
        width: 60vw;
        height: 50vh;
      }
      p {
        width: 60vw;
        text-align: justify;
      }
      .single-img {
        border-radius: 1vw;
        width: 60vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #d4dbeb;
        padding: 0.8vw;
        img {
          border-radius: 1vw;
          height: 10vw;
          width: 10vw;
        }
      }
    }
    .add-cart {
      display: flex;
      gap: 2vw;
      button {
        cursor: pointer;
        font-size: 1.5vw;
        font-weight: bold;
        border: none;
        outline: none;
        padding: 1vw;
        border-radius: 0.5vw;
        &:hover {
          background-color: #d4dbeb;
        }
      }
      input {
        border: none;
        outline: none;
        font-size: 1.5vw;
        font-weight: bold;
        width: 4vw;
        height: 4vw;
        padding: 1vw;
        border-radius: 0.5vw;
      }
    }
  }
`;
