const mongoose = require("mongoose");

const SocialSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },

    altText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Social", SocialSchema);
