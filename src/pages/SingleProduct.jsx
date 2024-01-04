import React, { useEffect, useState } from "react";
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
  return (
    <div>
      {products && (
        <div>
          <img src={singleProduct[0].thumbnail} />
          <h1>{singleProduct[0].title}</h1>
          <p>{singleProduct[0].description}</p>
          <strong>Price: {singleProduct[0].price}</strong>
          <p>Rating: {singleProduct[0].rating}</p>
          {singleProduct[0].images.map(img => (
            <img src={img} width={100} height={100} key={img} />
          ))}
        </div>
      )}
      <button onClick={handleAddToCart}>Add To Cart</button>
      <input type="number" onChange={e => setProductCount(e.target.value)} />
    </div>
  );
}
