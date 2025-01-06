import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/all');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products: ' + error.message);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      setError('Error deleting product: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Quantity: {product.quantity} kg</p>
            <p>Price: ₹{product.price} per kg</p>
            <p>Category: {product.category}</p>
            <p>Farmer: {product.farmerName}</p>
            <img src={product.imageUrl} alt={product.name} />
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;