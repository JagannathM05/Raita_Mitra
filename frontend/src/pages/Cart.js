// Cart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Cart.css';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart');
        setCartData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/all');
        const productsData = response.data;
        const productsObj = {};
        productsData.forEach((product) => {
          productsObj[product._id] = product;
        });
        setProducts(productsObj);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleQuantityChange = (id, value) => {
    const updatedCartData = cartData.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: value };
      }
      return item;
    });
    setCartData(updatedCartData);
  };

  const handleCheckout = async () => {
    const totalAmount = cartData.reduce((acc, item) => {
      const product = products[item.productId];
      return acc + product.price * item.quantity;
    }, 0);
    console.log(`Total amount: ${totalAmount}`);
    // Make API call to checkout
    try {
      const response = await axios.post('http://localhost:5000/api/checkout', {
        totalAmount,
      });
      console.log(response);
      alert('Checkout successful!');
    } catch (error) {
      console.error(error);
      alert('Failed to checkout');
    }
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <ul>
        {cartData.map((item) => (
          <li key={item._id}>
            <img src={products[item.productId].imageUrl} alt={products[item.productId].name} />
            <p>Product Name: {products[item.productId].name}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item._id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;