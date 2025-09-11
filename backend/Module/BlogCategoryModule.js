const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var categorySchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("BlogCategory", categorySchema);
