"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const totalItems = cartItems.reduce((acco, item) => acco + item.quantity, 0);

  useEffect(() => {
    setCartItems(getItemFromCart());
  }, []);

  const getItemFromCart = () => {
    return JSON.parse(sessionStorage.getItem("_CartItems")) || [];
  };

  const putItemToCart = item => {
    item.id =
      typeof crypto !== "undefined"
        ? crypto.randomUUID()
        : Date.now().toString();

    setCartItems(prevItems => {
      const currentItems = [...prevItems, item];
      sessionStorage.setItem("_CartItems", JSON.stringify(currentItems));
      return currentItems;
    });
  };

  const deleteItemFromCart = id => {
    setCartItems(currItems => {
      const remainingItems = currItems.filter(item => item.id !== id);
      sessionStorage.setItem("_CartItems", JSON.stringify(remainingItems));
      return remainingItems;
    });
  };

  const values = {
    cartItems,
    totalItems,
    getItemFromCart,
    putItemToCart,
    deleteItemFromCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export default CartProvider;
