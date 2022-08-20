const mongoose = require("mongoose");

const mongoConnnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connection established at ${conn.connection.host}`);
  } catch (error) {
    console.log("Error Message " + error.message);
  }
};

module.exports = mongoConnnection;
