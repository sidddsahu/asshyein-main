const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    URL: {
      type: String,
    },
    altText: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("videodata", VideoSchema);
