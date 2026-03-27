import React, { useState } from "react";

const plantsData = {
  "Indoor": [
    { id: 1, name: "Fiddle Leaf Fig", price: 25, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, img: "https://via.placeholder.com/100" },
    { id: 4, name: "ZZ Plant", price: 18, img: "https://via.placeholder.com/100" },
    { id: 5, name: "Spider Plant", price: 12, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Pothos", price: 10, img: "https://via.placeholder.com/100" }
  ],
  "Outdoor": [
    { id: 7, name: "Rose", price: 30, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Lavender", price: 15, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Tulip", price: 20, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Sunflower", price: 10, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Daisy", price: 12, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Marigold", price: 8, img: "https://via.placeholder.com/100" }
  ],
  "Succulents": [
    { id: 13, name: "Aloe Vera", price: 12, img: "https://via.placeholder.com/100" },
    { id: 14, name: "Echeveria", price: 10, img: "https://via.placeholder.com/100" },
    { id: 15, name: "Jade Plant", price: 18, img: "https://via.placeholder.com/100" },
    { id: 16, name: "Haworthia", price: 8, img: "https://via.placeholder.com/100" },
    { id: 17, name: "Lithops", price: 5, img: "https://via.placeholder.com/100" },
    { id: 18, name: "Sedum", price: 7, img: "https://via.placeholder.com/100" }
  ]
};

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>
      <nav>
        <a href="#">Home</a> | <a href="#">Plants</a> | <a href="#">Cart ({cart.length})</a>
      </nav>
      {Object.keys(plantsData).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {plantsData[category].map((plant) => (
              <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                <img src={plant.img} alt={plant.name} />
                <p>{plant.name}</p>
                <p>${plant.price}</p>
                <button
                  onClick={() => addToCart(plant)}
                  disabled={cart.find((p) => p.id === plant.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;