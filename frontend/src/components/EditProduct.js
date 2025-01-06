import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditProduct = ({ match }) => {
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${match.params.id}`);
        setFormData(response.data);
      } catch (error) {
        setError('Error fetching product: ' + error.message);
      }
    };
    fetchProduct();
  }, [match.params.id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/products/${match.params.id}`, formData);
      setMessage('Product updated successfully!');
      setFormData(response.data);
    } catch (error) {
      setError('Error updating product: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity (kg)"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (₹ per kg)"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
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
          value={formData.farmerName}
          onChange={handleChange}
          placeholder="Farmer Name"
          required
        />
        <input
          type="file"
          name="imageUrl"
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.files[0] })}
        />
        <button type="submit">Update Product</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default EditProduct;