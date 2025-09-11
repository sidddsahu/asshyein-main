const mongoose = require("mongoose");

const seoSchema = new mongoose.Schema(
  {
    path: { type: String, required: true, unique: true },
    element: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SEO", seoSchema);
