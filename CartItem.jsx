// CartItem.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>
          <button onClick={() => dispatch(updateQuantity({id: item.id, amount: item.quantity + 1}))}>+</button>
          <button onClick={() => dispatch(updateQuantity({id: item.id, amount: item.quantity - 1}))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total Amount: ${totalAmount}</h3>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button onClick={() => alert("Continue Shopping")}>Continue Shopping</button>
    </div>
  );
}

export default CartItem;