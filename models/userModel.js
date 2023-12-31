const mongoose = require("mongoose");

const UserAddress = new mongoose.Schema({
  city: String,
  district: String,
  ward: String,
  street: String,
  apartmentNumber: String,
  more: String,
});

const UserModel = new mongoose.Schema(
  {
    address1: [UserAddress],
    fullname: String,
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    username: String,
    password: String,
    address: String,
    image: String,
    permission: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserModel);
