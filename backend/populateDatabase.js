const mongoose = require("mongoose");
const Category = require("./models/category");
// const Order = require("./models/order");
const User = require("./models/user");
const Product = require("./models/product");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/tomeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for successful connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB...");
});

// Error handling
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Create new products
const productData = require("./data/products.json");

Product.insertMany(productData)
  .then((products) => {
    console.log("Products inserted:", products.length);
    // After products are inserted, create categories
     const categoriesData = require("./data/categories.json");
     return Category.insertMany(categoriesData);
   })
   .then((categories) => {
     console.log("Categories inserted:", categories.length);
  //   // After categories are inserted, create orders
  //   const ordersData = require("./data/categories.json");
  //   return Order.insertMany(ordersData);
  // })
  // .then((categories) => {
  //   console.log("orders inserted:", categories.length);
    // After orders are inserted, create users
    const usersData = require("./data/users.json");
    return User.insertMany(usersData);
  })
  .then((users) => {
    console.log("Users inserted:", users.length);
    // Close the connection after all operations are completed
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error:", err);
    mongoose.disconnect(); // Close the connection in case of error
  });
