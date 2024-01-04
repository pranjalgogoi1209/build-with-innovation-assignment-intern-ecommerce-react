import React, { useState } from "react";
import { useProductContext } from "../context/ProductsProvider";

export default function Cart({ cartProduct }) {
  const [cartList, setCartList] = useState([]);
  const { products } = useProductContext();
  const { id, productCount } = cartProduct;

  let selectedProduct =
    products && products.filter(product => product.id === Number(id));
  console.log(selectedProduct);

  const productDetails = selectedProduct && {
    ...selectedProduct[0],
    productCount: productCount,
  };

  cartList.push(productDetails);
  console.log(cartList);
  return (
    <div>
      <h1>CART</h1>
      {cartList &&
        cartList.map(product => (
          <div key={product}>
            <img src={product.thumbnail} width={200} />
            <p>{product.title}</p>
            <span>{product.productCount}</span>
          </div>
        ))}
    </div>
  );
}
