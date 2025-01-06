import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const cartItems = JSON.parse(cart);
      setCartItems(cartItems);
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalPrice(total);
    }
  }, []);

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/checkout', {
        cartItems,
        totalPrice,
        paymentMethod,
      });
      setPaymentStatus(response.data.message);
    } catch (error) {
      console.error(error);
      setPaymentStatus('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ₹{totalPrice}</p>
      <label>
        Payment Method:
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select</option>
          <option value="credit_card">Credit Card</option>
          <option value="debit_card">Debit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </label>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Checkout;