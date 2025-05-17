/*============================================
server.js  (project root)
Main entry point: loads middleware, routes, and starts server
============================================*/

// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');    
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize
const app = express();
connectDB();

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // ← Add this here

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/orders', require('./routes/order.routes'));
app.use('/api/contact', require('./routes/contact.routes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
