const mongoose = require("mongoose");

var subcategorySchema = new mongoose.Schema(
  {
    name: String,
    // subCategory: {
    //     type:String
    // },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      index: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Subsubcategory", subcategorySchema);
