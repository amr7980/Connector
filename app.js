const mongoose = require('mongoose');
const Shopper = require('./models/shopper');
const Product = require('./models/product');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/storefrontDB')
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.log(err));

// Sample shopper data
const newShopper = new Shopper({
  name: 'Frances Nwabudike',
  email: 'frances@example.com',
  password: 'securepassword123'
});

// Sample product data
const newProduct = new Product({
  name: 'Wireless Headphones',
  price: 99.99,
  description: 'High-quality noise-cancelling headphones',
  category: 'Electronics',
  inStock: true
});

// Save to database
async function seedData() {
  await Shopper.deleteMany();
  await Product.deleteMany();
  await newShopper.save();
  await newProduct.save();
  console.log('Sample data added!');
  mongoose.connection.close();
}

seedData();
