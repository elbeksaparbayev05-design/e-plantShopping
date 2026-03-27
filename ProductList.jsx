import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  { id: 1, name: "Ficus", price: 15 },
  { id: 2, name: "Monstera", price: 20 },
  // ... kamida 6 ta har kategoriya
];

export default function ProductList() {
  const dispatch = useDispatch();
  return (
    <div className="product-list">
      {plants.map(plant => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addItem({...plant, quantity: 1}))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}