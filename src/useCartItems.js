import React, { useState, useEffect } from "react";

export default function useCartItems() {
  const [cartItems, setCartItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/cartItems")
      .then(res => res.json())
      .then(data => {
        setCartItems(data);
        setIsLoading(false);
      });
  }, []);
  return { cartItems, isLoading };
}
