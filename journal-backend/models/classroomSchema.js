const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
  },
  subject: {
    type: String,
    required: [true, "Please enter a subject"],
  },
  creates: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

module.exports = mongoose.model("Classroom", classroomSchema);
