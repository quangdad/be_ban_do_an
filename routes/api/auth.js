const router = require("express").Router();
const { body } = require("express-validator");
const validation = require("../../handlers/validation");
const authController = require("../../controllers/authController");
const User = require("../../models/userModel");
const token = require("../../handlers/token");

router.post("/signin", authController.signin);

router.post("/signup", authController.signup);

router.post("/verify-token", token.verifyToken, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
