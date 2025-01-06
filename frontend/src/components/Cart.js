import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
          <h2>{item.name}</h2>
          <p>Price: ₹{item.price} per kg</p>
          <p>Quantity: {item.quantity} kg</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;