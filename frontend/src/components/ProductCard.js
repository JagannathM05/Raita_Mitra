import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price} per kg</p>
      <p>Available Quantity: {product.quantity} kg</p>
      <p>Farmer: {product.farmerName}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;