const express = require("express");
const router = express.Router();
const {
  getAllClassrooms,
  getClassroom,
  createClassroom,
  updateClassroom,
  deleteClassroom,
} = require("../controllers/classroomControllers");

router.get("/", getAllClassrooms); // Get all classrooms
router.get("/:id", getClassroom); // Get classroom by ID
router.post("/", createClassroom); // Create a new classroom
router.put("/:id", updateClassroom); // Update classroom by ID
router.delete("/:id", deleteClassroom); // Delete classroom by ID

module.exports = router;
