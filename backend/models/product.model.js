// This file defines the Product model using Mongoose.
// models/product.model.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  price:      { type: Number, required: true },
  shortDesc:  { type: String },
  longDesc:   { type: String },
  imageUrl:   { type: String },            // your original field
  image:      { type: String },            // allow this too
  stock:      { type: Number, default: 100 }
});

// Whenever you read, prefer imageUrl over image:
ProductSchema.virtual('imgPath').get(function() {
  return this.imageUrl || this.image || '';
});

module.exports = mongoose.model('Product', ProductSchema);