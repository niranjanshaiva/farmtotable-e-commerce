const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  role: String // 'farmer' or 'buyer'
});

module.exports = mongoose.model('User', userSchema);
