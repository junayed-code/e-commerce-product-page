"use client";

import Image from "next/image";
import useCart from "@/hooks/useCart";
import { CartIcon, DeleteIcon } from "@/utils/icons";
import productsImage from "@/utils/productsImage";

const CartItem = ({ item }) => {
  const { deleteItemFromCart } = useCart();
  const { id, name, price, quantity } = item;

  const handleDeleteItemFromCart = e => {
    deleteItemFromCart(id);
  };

  return (
    <div className="flex items-center gap-x-4">
      <Image
        className="object-cover rounded-lg"
        width={60}
        height={60}
        src={productsImage[0].src}
        alt={name}
      />
      <div className="text-lg text-gray-500">
        <h4 className="font-semibold">{name}</h4>
        <p className="">
          ${price.toFixed(2)} <span className="text-xl">&times;</span>{" "}
          {quantity}{" "}
          <span className="font-bold ml-1 text-gray-800">
            ${(price * quantity).toFixed(2)}
          </span>
        </p>
      </div>
      <button onClick={handleDeleteItemFromCart}>
        <DeleteIcon />
      </button>
    </div>
  );
};

function Cart() {
  const { cartItems, totalItems } = useCart();

  return (
    <div className="group">
      <button className="block relative">
        <CartIcon size={28} />
        <span className="absolute -top-2 -right-1.5 inline-block bg-primary text-xs text-secondary px-2 rounded-xl">
          {totalItems}
        </span>
      </button>

      <div
        tabIndex={0}
        className="w-[calc(100%-2rem)] sm:w-96 min-h-52 p-5 rounded-md bg-white shadow-[0_0_60px_-18px] shadow-black/30 absolute z-40 top-[70px] right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-20 duration-200 opacity-0 pointer-events-none group-focus-within:opacity-100 group-focus-within:pointer-events-auto flex flex-col"
      >
        <h5 className="font-bold">Cart</h5>
        <hr className="border mt-2.5 mb-4" />

        {cartItems.length ? (
          <div className="flex-1 flex flex-col gap-y-5">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            <button className="bg-primary text-secondary mt-2 sm:text-lg flex items-center gap-x-3 justify-center py-3 px-2 grow rounded-md font-semibold hover:opacity-70 duration-200 active:scale-95">
              Checkout
            </button>
          </div>
        ) : (
          <div className="flex-1 grid place-items-center">
            <h4 className="text-lg font-semibold text-gray-600">
              Your cart is empty!
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
