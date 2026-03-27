// ProductList.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  { id: 1, name: "Ficus", category: "Indoor", price: 10 },
  { id: 2, name: "Aloe Vera", category: "Indoor", price: 12 },
  { id: 3, name: "Bamboo", category: "Outdoor", price: 15 },
  { id: 4, name: "Cactus", category: "Indoor", price: 8 },
  { id: 5, name: "Orchid", category: "Outdoor", price: 20 },
  { id: 6, name: "Fern", category: "Indoor", price: 14 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id} className="plant-card">
          <h3>{plant.name}</h3>
          <p>Category: {plant.category}</p>
          <p>Price: ${plant.price}</p>
          <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;