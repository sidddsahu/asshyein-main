const mongoose = require("mongoose");
const BannerSchema = new mongoose.Schema(
  {
    images: [
      {
        type: String,
      },
    ],
    URL: {
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

module.exports = mongoose.model("Banner", BannerSchema);
