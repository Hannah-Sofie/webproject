const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Load environment variables
require("dotenv").config();

// Connect to the database
const connectDB = require("./dbconnect");
connectDB();

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
