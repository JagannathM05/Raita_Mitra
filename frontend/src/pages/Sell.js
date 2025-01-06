import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Sell.css';

const Sell = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    category: '',
    farmerName: '',
    imageUrl: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'imageUrl') {
      setImage(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('quantity', formData.quantity);
      formDataToSubmit.append('price', formData.price);
      formDataToSubmit.append('category', formData.category);
      formDataToSubmit.append('farmerName', formData.farmerName);
      formDataToSubmit.append('imageUrl', image);

      const response = await axios.post('http://localhost:5000/api/products/add', formDataToSubmit);
      setMessage(response.data.message);
      setFormData({ name: '', quantity: '', price: '', category: '', farmerName: '', imageUrl: '' });
      setImage(null);
    } catch (error) {
      setError('Error adding product: ' + error.message);
    }
  };

  return (
    <div className="sell-container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity (kg)"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹ per kg)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Type</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="grains">Grains and Cereals</option>
          <option value="pulses">Pulses and Legumes</option>
          <option value="spices">Spices and Herbs</option>
          <option value="nuts">Nuts and Seeds</option>
        </select>
        <input
          type="text"
          name="farmerName"
          placeholder="Farmer Name"
          value={formData.farmerName}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="imageUrl"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Sell;