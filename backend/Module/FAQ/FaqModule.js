const mongoose = require("mongoose");
const FAQSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    response: {
      type: String,
    },
    altText: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("faq", FAQSchema);
