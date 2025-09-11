const mongoose = require("mongoose");
const costumerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", costumerSchema);
