var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/cart", require("./api/cart"));
router.use("/voucher", require("./api/voucher"));
router.use("/auth", require("./api/auth"));
router.use("/user", require("./api/users"));
router.use("/products", require("./api/product"));
router.use("/producers", require("./api/producer"));

module.exports = router;
