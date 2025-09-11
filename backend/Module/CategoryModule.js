const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var categorySchema = new mongoose.Schema(
  {
    name: String,
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "coursedata",
    },
    pretestseries: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "coursetest",
    },

    maintestseries: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "coursemaintest",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Category", categorySchema);
