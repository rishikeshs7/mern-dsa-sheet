const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// 👇 prevent OverwriteModelError on server restart
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
