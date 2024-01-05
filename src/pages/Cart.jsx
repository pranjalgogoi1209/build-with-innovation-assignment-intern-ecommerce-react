import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import useCartItems from "../useCartItems";

export default function Cart({ cartProduct }) {
  const [cartList, setCartList] = useState([]);
  const { products } = useProductContext();
  const { id, productCount } = cartProduct;
  const [totalPrice, setTotalPrice] = useState();
  const [totalQty, setTotalQty] = useState();

  let selectedProduct =
    products && products.filter(product => product.id === Number(id));

  const selectedProductDetails = selectedProduct && {
    ...selectedProduct[0],
    productCount: productCount,
  };

  useEffect(() => {
    fetch("http://localhost:3000/cartItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedProductDetails),
    }).then(() => {
      console.log("New Item Added !!");
    });
  }, [cartProduct]);

  const { cartItems, isLoading } = useCartItems();

  // total price
  let sum = 0;
  useEffect(() => {
    cartItems &&
      cartItems.forEach(product => {
        sum += product.price * Number(product.productCount);
      });
    setTotalPrice(sum);
  }, [cartItems]);

  // total qty
  let qty = 0;
  useEffect(() => {
    cartItems &&
      cartItems.forEach(product => {
        qty += Number(product.productCount);
      });
    setTotalQty(qty);
  }, [cartItems]);
  return (
    <CartWrapper>
      <div className="Cart">
        <h1>CART</h1>
        {isLoading && <p>Loading...</p>}

        <div className="cart-container">
          {cartItems &&
            cartItems.map(product => (
              <div className="cart-items" key={product.id}>
                <img src={product.thumbnail} />
                <p>{product.title}</p>
                <span>Qty: {product.productCount}</span>
                <span>Price: {product.price}</span>
              </div>
            ))}

          <div className="total">
            <h1>Qty: {totalQty}</h1>
            <h1>Total: {totalPrice}</h1>
          </div>
        </div>
        <Link to={"/"}>
          <div className="checkout">
            <button>Checkout</button>
          </div>
        </Link>
      </div>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  .Cart {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    padding-bottom: 2vw;
    .cart-container {
      display: flex;
      flex-direction: column;
      gap: 1vw;
      background-color: #d4dbeb;
      border-radius: 1vw;
      padding: 4vw;
      padding-bottom: 2vw;
      .cart-items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #212121;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 1vw;
        padding: 2vw;
        img {
          height: 5vw;
          width: 10vw;
          border-radius: 0.5vw;
        }
      }
      .total {
        color: #212121;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
    a {
      text-decoration: none;
    }
    .checkout {
      padding-top: 2vw;
      display: flex;
      justify-content: flex-end;
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
    }
  }
`;
