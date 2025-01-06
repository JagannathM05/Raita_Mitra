// cartRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the Cart model
const Cart = mongoose.model('Cart', {
  productId: String,
  quantity: Number,
});

// Create a new endpoint to add a product to the cart
router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = new Cart({ productId, quantity });
    await cart.save();
    res.json({ message: 'Product added to cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add product to cart' });
  }
});

// Create a new endpoint to get the cart data
router.get('/', async (req, res) => {
  try {
    const cartData = await Cart.find().exec();
    res.json(cartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get cart data' });
  }
});

// Create a new endpoint to handle checkout
router.post('/checkout', async (req, res) => {
  try {
    const { totalAmount } = req.body;
    console.log(`Total amount: ${totalAmount}`);
    // Process the checkout request
    res.json({ message: 'Checkout successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to checkout' });
  }
});

module.exports = router;