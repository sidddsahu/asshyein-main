const mongoose = require("mongoose");

const MainSchema = new mongoose.Schema(
  {
    images: [
      {
        type: String,
      },
    ],

    altText: {
      type: String,
    },

    Price: {
      type: Number,
    },
    testmodule: {
      type: String,
    },
    Durations: {
      type: String,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
    },

    subsubCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subsubcategory",
    },

    CourseDescription: {
      type: String,
    },

    LastDate: {
      // Changed to Date if it's a date field
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("coursemaintest", MainSchema);
