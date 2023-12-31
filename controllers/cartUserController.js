const co = require("co");
const Cart = require("../models/cartModel");
const userModel = require("../models/userModel");

module.exports = {
  gets: (req, res) => {
    co(function* () {
      const carts = yield Cart.find();
      return carts;
    })
      .then((data) => res.status(200).json(data))
      .catch((e) => res.status(500).json(e));
  },

  get: (req, res) => {
    const id = req.params.id;
    co(function* () {
      const cart = yield Cart.findById(id);
      if (!cart) {
        return Promise.reject(new Error("No found cart"));
      }
      return cart;
    })
      .then((data) => res.status(200).json(data))
      .catch((e) => res.status(500).json(e));
  },

  create: (req, res) => {
    co(function* () {
      const checkUser = yield Cart.findOne({ UID: req.body.UID });
      if (!checkUser) {
        return yield Cart.create(req.body);
      }
      const cartUpdate = yield Cart.update(
        { UID: req.body.UID },
        {
          $push: { cart: req.body.cart },
        }
      );
      return cartUpdate;
    })
      .then((data) => res.status(200).json(data))
      .catch((e) => res.status(500).json(e));
  },

  update: (req, res) => {
    co(function* () {
      const order = yield Cart.findOneAndUpdate(
        { _id: req.body.id, "cart._id": req.body.cartId },
        { $set: { "cart.$.status": req.body.status } },
        {
          new: true,
        }
      );
      return order;
    })
      .then((data) => res.status(200).json(data))
      .catch((e) => res.status(500).json(e));
  },

  delete: (req, res) => {
    co(function* () {
      yield Cart.findByIdAndDelete(req.params.id);
      return new Promise.resolve("Delete successfully");
    })
      .then((data) => res.status(200).json({ message: "delete successfully" }))
      .catch((e) => res.status(500).json(e));
  },

  getOrderByUID: (req, res) => {
    co(function* () {
      const isUser = yield userModel.findById(req.params.UID);
      if (!isUser) {
        return yield Promise.reject(new Error("User Not found"));
      }
      const orders = yield Cart.find({ UID: req.params.UID });

      return orders;
    })
      .then((data) => res.status(200).json(data))
      .catch((e) => res.status(500).json(e));
  },

  deleteOrderByUID: (req, res) => {
    co(function* () {
      yield Cart.findOneAndDelete({ UID: req.params.UID });

      return yield Promise.resolve("Deleted order");
    })
      .then((data) => res.status(200).json({ message: "Deleted order" }))
      .catch((e) => res.status(500).json(e));
  },
};
