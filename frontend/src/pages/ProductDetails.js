import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL params
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data.product);
      } catch (err) {
        setError('Product not found');
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Quantity: {product.quantity}</p>
          <p>Price: ₹{product.price} per kg</p>
          <p>Sold by: {product.farmerId.name}</p>
          <button style={{ backgroundColor: '#00796b', color: 'white' }}>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
