// frontend/src/components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Product = ({ product }) => {
  const handleBuy = () => {
    // Add product to cart
    Cart.handleAddToCart(product);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Quantity: {product.quantity} kg</p>
      <p>Price: {product.pricePerKg} per kg</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
};

export default Product;