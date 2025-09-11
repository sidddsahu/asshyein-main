const mongoose = require("mongoose");
const RefundSchema = new mongoose.Schema(
  {
    Desciption: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Refundpolicy", RefundSchema);
