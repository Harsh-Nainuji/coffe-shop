// backend/routes/contact.routes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.model');
const auth = require('../middleware/auth.middleware');

// USER: submit contact form
router.post('/', async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json({ msg: 'Submitted' });
});

// ADMIN: get all contact submissions
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch contacts' });
  }
});

// ADMIN: delete a contact message
router.delete('/:id', auth, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to delete message' });
  }
});

module.exports = router;
