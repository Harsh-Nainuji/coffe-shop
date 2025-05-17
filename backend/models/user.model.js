/*============================================
models/user.model.js
Schema for users (admin only, no bcrypt)
============================================*/
// models/user.model.js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});
module.exports = mongoose.model('User', UserSchema);
