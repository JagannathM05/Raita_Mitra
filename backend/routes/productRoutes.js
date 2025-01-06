const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/add', upload.single('imageUrl'), async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      category: req.body.category,
      farmerName: req.body.farmerName,
      imageUrl: req.file.path,
    });
    await product.save();
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product: ' + error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const products = await Product.find().exec();
    if (!products) {
      res.status(404).json({ message: 'No products found' });
    } else {
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving products' });
  }
});

module.exports = router;