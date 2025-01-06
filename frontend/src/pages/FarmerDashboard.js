import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/farmer/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleRemoveProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/farmer/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerDashboard;