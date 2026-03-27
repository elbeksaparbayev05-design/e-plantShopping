import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 25 },
  { id: 2, name: 'Snake Plant', category: 'Indoor', price: 15 },
  { id: 3, name: 'Rose', category: 'Flowering', price: 10 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {plants.map(plant => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>Price: ${plant.price}</p>
          <button onClick={() => dispatch(addItem({...plant, quantity:1}))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;