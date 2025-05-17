// backend/routes/order.routes.js

const express = require('express');
const router = express.Router();
const Order = require('../models/order.model');
const auth = require('../middleware/auth.middleware');  // ← ensure this line is present

// USER: place order
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUBLIC: get all orders (for customer cart)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch orders' });
  }
});
// PUBLIC: cancel an order
router.delete('/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Order cancelled' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to cancel order' });
  }
});

module.exports = router;
