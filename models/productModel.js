const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    name: String,
    description: String,
    producerId: {
      type: mongoose.Types.ObjectId,
      ref: "producer",
    },
    count: {
      type: Number,
      default: 0,
    },
    image: String,
    type: String,
    price: Number,
    hsx: Date,
    hsd: Date,
    discount: {
      type: Number,
      default: 0,
    },
    rateCount: {
      type: Number,
      default: 0,
    },
    countCartUser: {
      type: Number,
      default: 0,
    },
    selling: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Product);
