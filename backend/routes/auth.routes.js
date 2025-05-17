
/*============================================
routes/auth.routes.js
Login route (issues no tokens)
============================================*/
// routes/auth.routes.js
const express = require('express');
const router = express.Router();

// ADMIN login (basic auth client-side)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    return res.json({ msg: 'Login successful' });
  }
  return res.status(401).json({ msg: 'Invalid credentials' });
});

module.exports = router;