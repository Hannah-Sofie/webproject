const express = require("express");
const app = express();
const PORT = process.env.APP_PORT || 5001;

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

const postRoutes = require("./routes/postRoutes");
app.use("/posts", postRoutes);

const classroomRoutes = require("./routes/classroomRoutes");
app.use("/classrooms", classroomRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, at localhost:${PORT}`);
});
