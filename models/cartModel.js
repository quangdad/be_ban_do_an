const mongoose = require("mongoose");

const Product = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  description: String,
  producerId: String,
  count: Number,
  prdCount: Number,
  image: String,
  type: String,
  price: Number,
  hsd: Date,
  hsx: Date,
});

const Cart = mongoose.Schema(
  {
    products: [Product],
    voucher: String,
    status: {
      type: String,
      enum: ["danggiao", "hoantat", "dahuy", "choxacnhan"],
      default: "choxacnhan",
    },
  },
  { timestamps: true }
);

const CartModal = mongoose.Schema({
  cart: [Cart],
  UID: String,
  nameOfUser: String,
  phone: Number,
  address: String,
});

module.exports = mongoose.model("cart", CartModal);
