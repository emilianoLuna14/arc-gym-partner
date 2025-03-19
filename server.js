require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable Cross-Origin Requests
app.use(express.json()); // Parse JSON data

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
    process.exit(1);
  }
};
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("🏋️‍♂️ Gym Partner Backend is Running!");
});

// Import API Routes
const userRoutes = require("./src/routes/users"); // User Routes
app.use("/api/users", userRoutes); // Mount the user routes

// Start the Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


