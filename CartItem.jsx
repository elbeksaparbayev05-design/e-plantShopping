import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.qty}</p>  // Qo'shiladigan satr
          <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity+1}))}>+</button>
          <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity-1}))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <h2>Total Cart Amount: ${totalAmount}</h2>
      <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      <button onClick={() => window.location.href = "/ProductList"}>Continue Shopping</button>
    </div>
  );
};

export default CartItem;