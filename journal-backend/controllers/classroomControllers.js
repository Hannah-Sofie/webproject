const Classroom = require("../models/classroomSchema");

const getAllClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id);
    if (classroom) {
      res.json(classroom);
    } else {
      res.status(404).json({ message: "Classroom not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClassroom = async (req, res) => {
  try {
    const newClassroom = new Classroom({
      title: req.body.title,
      subject: req.body.subject,
    });
    const savedClassroom = await newClassroom.save();
    res.status(400).json(savedClassroom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateClassroom = async (req, res) => {
  try {
    const updatedClassroom = await Classroom.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      },
    );
    if (updatedClassroom) {
      res.json(updatedClassroom);
    } else {
      res.status(400).json({ message: "Classroom not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClassroom = async (req, res) => {
  try {
    const deletedClassroom = await Classroom.findByIdAndDelete(req.params.id);
    if (deletedClassroom) {
      res.json({ message: "Classroom deleted" });
    } else {
      res.status(404).json({ message: "Classroom not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClassroom,
  getAllClassrooms,
  createClassroom,
  updateClassroom,
  deleteClassroom,
};
