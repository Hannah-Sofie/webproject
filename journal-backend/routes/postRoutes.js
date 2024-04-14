const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");

router.get("/", getAllPosts); // Get all posts
router.get("/:id", getPost); // Get post by ID
router.post("/", createPost); // Create a new post
router.put("/:id", updatePost); // Update post by ID
router.delete("/:id", deletePost); // Delete post by ID

module.exports = router;
