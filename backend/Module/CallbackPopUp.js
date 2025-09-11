const mongoose = require("mongoose");

const CallbackPopUp = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    phone: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model("Callback", CallbackPopUp);

module.exports = Enquiry;
