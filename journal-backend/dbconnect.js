const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const local = "mongodb://localhost:27017/webproject";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || local;
    const conn = await mongoose.connect(mongoURI);

    console.log(`Connected to database: ${conn.connection.host}`);
    console.log(`Using MongoDB URI: ${mongoURI}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
