const mongoose = require("mongoose");

var subcategorySchema = new mongoose.Schema(
  {
    name: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Catgeory",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Subcategory", subcategorySchema);
