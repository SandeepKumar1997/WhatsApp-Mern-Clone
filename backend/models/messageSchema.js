const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    name: { type: String },
    message: { type: String },
    received: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("messageContent", messageSchema);
