const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

// Define routes for user operations
router.get("/", getAllUsers); // Get all users
router.get("/:id", getUser); // Get user by ID
router.post("/", createUser); // Create a new user
router.put("/:id", updateUser); // Update user by ID
router.delete("/:id", deleteUser); // Delete user by ID

module.exports = router;
