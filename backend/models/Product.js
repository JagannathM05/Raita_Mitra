const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  farmerName: { type: String, required: true },
  imageUrl: { type: String, required: true }, // Add this field
});

module.exports = mongoose.model('Product', ProductSchema);