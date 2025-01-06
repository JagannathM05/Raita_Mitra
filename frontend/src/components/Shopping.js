import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Shopping.css';

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/all');
        console.log(response);
        if (response.data) {
          setProducts(response.data);
          setFilteredProducts(response.data);
        } else {
          setError('No products found');
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch products');
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart', { productId, quantity: 1 });
      console.log(response);
      alert('Product added to cart');
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.data.message) {
          alert(`Failed to add product to cart: ${error.response.data.message}`);
        } else {
          alert('Failed to add product to cart');
        }
      } else {
        alert('Failed to add product to cart');
      }
    }
  };

  return (
    <div>
      <div className="shopping-navbar">
        <ul>
          <li>
            <a href="#fruits" onClick={() => handleCategoryChange('fruits')}>
              Fruits
            </a>
          </li>
          <li>
            <a href="#vegetables" onClick={() => handleCategoryChange('vegetables')}>
              Vegetables
            </a>
          </li>
          <li>
            <a href="#grains" onClick={() => handleCategoryChange('grains')}>
              Grains and Cereals
            </a>
          </li>
          <li>
            <a href="#pulses" onClick={() => handleCategoryChange('pulses')}>
              Pulses and Legumes
            </a>
          </li>
          <li>
            <a href="#spices" onClick={() => handleCategoryChange('spices')}>
              Spices and Herbs
            </a>
          </li>
          <li>
            <a href="#nuts" onClick={() => handleCategoryChange('nuts')}>
              Nuts and Seeds
            </a>
          </li>
          <li>
            <a href="#all" onClick={() => handleCategoryChange('')}>
              All Products
            </a>
          </li>
        </ul>
        <div>
          <a href="Cart" className="cart -link">Cart</a>
        </div>
      </div>
      <div className="product-sections">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-section">
            <div className="product-image">
              {product.imageUrl ? (
                <img src={`http://localhost:5000/${product.imageUrl.replace(/\\/g, '/')}`} alt={product.name} onError={(e) => {
                  console.log('Error loading image:', e);
                  e.target.src = 'https://via.placeholder.com/150'; // Fallback image if the original fails to load
                }} />
              ) : (
                <p>No image available</p>
 )}
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Quantity: {product.quantity}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>Farmer: {product.farmerName}</p>
              <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Shopping;