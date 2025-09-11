const mongoose = require("mongoose");
const MemberSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    altText: {
      type: String,
    },

    desciption: {
      type: String,
    },

    limited: {
      type: String,
    },

    limitedoffer: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Discount", MemberSchema);
