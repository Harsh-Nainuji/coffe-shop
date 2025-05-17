const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/product.model');
const auth = require('../middleware/auth.middleware');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// GET all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADMIN: CREATE product with image upload
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const url = req.file ? `/uploads/${req.file.filename}` : '';

    const newProduct = new Product({
  name,
  price,
  stock,
  imageUrl: url,
  image: url
});
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to create product' });
  }
});

// ADMIN: UPDATE product (you can later allow image updates too)
router.put('/:id', auth, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// ADMIN: DELETE product
router.delete('/:id', auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
});

module.exports = router;
