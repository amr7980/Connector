const mongoose = require('mongoose');

const shopperSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  joinedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Shopper', shopperSchema);
