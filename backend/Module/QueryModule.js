const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Phone: {
      type: String,
    },
    State: {
      type: String,
    },

    Medium: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("course", CourseSchema);
