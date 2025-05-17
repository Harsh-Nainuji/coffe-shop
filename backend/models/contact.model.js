
/*============================================
models/contact.model.js
Schema for contact form submissions
============================================*/
// models/contact.model.js
const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Contact', ContactSchema);