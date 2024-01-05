import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import useCartItems from "../useCartItems";

export default function Cart({ cartProduct }) {
  const [cartList, setCartList] = useState([]);
  const { products } = useProductContext();
  const { id, productCount } = cartProduct;

  let selectedProduct =
    products && products.filter(product => product.id === Number(id));

  const selectedProductDetails = selectedProduct && {
    ...selectedProduct[0],
    productCount: productCount,
  };

  /*  useEffect(() => {
    fetch("http://localhost:3000/cartItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedProductDetails),
    }).then(() => {
      console.log("New Item Added !!");
    });
  }, [cartProduct]);

  console.log(cartList);

  const { cartItems, isLoading } = useCartItems(); */
  return (
    <CartWrapper>
      <Link to={"/"}>
        <h1>Shop More</h1>
      </Link>
      <h1>CART</h1>
      {/* {isLoading && <p>Loading...</p>} */}
      <div>
        {/*    {cartItems &&
        cartItems.map(product => (
          <div key={product.thumbnail} className="cart-itmes">
            <img src={product.thumbnail} width={200} />
            <p>{product.title}</p>
            <span>Items: {product.productCount}</span>
          </div>
        ))} */}
      </div>

      <div>
        <div className="cart-items">
          <img
            src="https://i.dummyjson.com/data/products/22/thumbnail.jpg"
            width={200}
          />
          <p>Condom</p>
          <span>Items: 10</span>
        </div>
      </div>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  .cart-items {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    color: red;
  }
`;
