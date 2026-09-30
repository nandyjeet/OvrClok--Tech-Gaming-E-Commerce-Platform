const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("./model/User");
const Product = require("./model/Product");
const Order = require("./model/Order");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);

    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@ovrclok.com",
      password: hashedPassword,
      role: "admin",
      verified: true,
    });

    const products = [
      {
        name: "Wireless Headphones",
        description:
          "Premium quality wireless headphones with active noise cancellation and 30-hour battery life.",
        price: 199.99,
        category: "Electronics",
        stock: 50,
        imageUrl:
          "https://via.placeholder.com/300x300?text=Wireless+Headphones",
        rating: 4.5,
        numReviews: 120,
      },
      {
        name: "Gaming Mouse",
        description:
          "High-precision gaming mouse with RGB lighting and programmable buttons.",
        price: 59.99,
        category: "Electronics",
        stock: 100,
        imageUrl: "https://via.placeholder.com/300x300?text=Gaming+Mouse",
        rating: 4.8,
        numReviews: 85,
      },
      {
        name: "USB-C Cable",
        description: "Durable 6ft USB-C cable compatible with all devices.",
        price: 12.99,
        category: "Accessories",
        stock: 200,
        imageUrl: "https://via.placeholder.com/300x300?text=USB-C+Cable",
        rating: 4.3,
        numReviews: 42,
      },
      {
        name: "Mechanical Keyboard",
        description:
          "Professional mechanical keyboard with cherry switches and customizable RGB lighting.",
        price: 149.99,
        category: "Electronics",
        stock: 75,
        imageUrl:
          "https://via.placeholder.com/300x300?text=Mechanical+Keyboard",
        rating: 4.7,
        numReviews: 156,
      },
      {
        name: "Laptop Stand",
        description:
          "Adjustable aluminum laptop stand for better posture and desk organization.",
        price: 34.99,
        category: "Accessories",
        stock: 150,
        imageUrl: "https://via.placeholder.com/300x300?text=Laptop+Stand",
        rating: 4.4,
        numReviews: 67,
      },
      {
        name: "4K Webcam",
        description:
          "4K ultra HD webcam with built-in microphone and auto-focus technology.",
        price: 89.99,
        category: "Electronics",
        stock: 40,
        imageUrl: "https://via.placeholder.com/300x300?text=4K+Webcam",
        rating: 4.6,
        numReviews: 98,
      },
      {
        name: "Phone Charger",
        description: "Fast charging 65W phone charger with dual ports.",
        price: 24.99,
        category: "Accessories",
        stock: 300,
        imageUrl: "https://via.placeholder.com/300x300?text=Phone+Charger",
        rating: 4.2,
        numReviews: 201,
      },
      {
        name: "Portable SSD",
        description: "1TB portable external SSD with high-speed data transfer.",
        price: 129.99,
        category: "Electronics",
        stock: 60,
        imageUrl: "https://via.placeholder.com/300x300?text=Portable+SSD",
        rating: 4.9,
        numReviews: 174,
      },
    ];

    await Product.insertMany(products);
    
    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
