"use client";

import useCart from "@/hooks/useCart";
import { PlusIcon, MinusIcon, CartIcon } from "@/utils/icons";
import { useState } from "react";

function AddToCart() {
  const { putItemToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = number => setQuantity(prev => prev + number);

  const handleAddItemToCart = () => {
    const item = {
      name: "Fall Limited Edition Sneakers",
      quantity,
      price: 125,
    };
    putItemToCart(item);
    setQuantity(0);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-x-6 gap-y-4">
      <div className="grid grid-cols-3 bg-gray-100 text-center w-full sm:max-w-40 rounded-md py-3">
        <button
          disabled={quantity === 0}
          onClick={() => handleQuantity(-1)}
          className="flex items-center justify-center hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MinusIcon />
        </button>
        <span className="border-x-2 font-medium text-lg">{quantity}</span>
        <button
          onClick={() => handleQuantity(1)}
          className="flex items-center justify-center hover:opacity-70"
        >
          <PlusIcon />
        </button>
      </div>
      <button
        disabled={quantity === 0}
        onClick={handleAddItemToCart}
        className="bg-primary text-secondary flex items-center gap-x-3 justify-center py-3 px-2 grow rounded-md font-semibold shadow-[0_20px_40px_-7px] shadow-primary/30 hover:opacity-70 disabled:opacity-50 disabled:pointer-events-none duration-200 active:scale-95"
      >
        <CartIcon color="#ffede0" />
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
