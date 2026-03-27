import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

export default function CartItem() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity+1}))}>+</button>
          <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity-1}))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <button>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}