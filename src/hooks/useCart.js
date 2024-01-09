import { CartContext } from "@/providers/CartProvider";
import { useContext } from "react";

/**
 * @typedef {object} CartItem
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {number} quantity
 */

/**
 *
 * @returns {{cartItems: CartItem[], totalItems: number, getItemFromCart: () => CartItem[], putItemToCart: (item: CartItem) => void, deleteItemFromCart: (id: string) => void}}
 */
function useCart() {
  return useContext(CartContext);
}

export default useCart;
