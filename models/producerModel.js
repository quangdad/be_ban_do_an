const mongoose = require("mongoose");

const ProducerModel = new mongoose.Schema(
  {
    fullname: String,
    phone: String,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Producer", ProducerModel);
