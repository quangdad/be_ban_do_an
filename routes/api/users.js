var express = require("express");
const userController = require("../../controllers/userController");
var router = express.Router();

router.get("/all", userController.getAll);
router.put("/:id", userController.update);
router.get("/:id", userController.get);

module.exports = router;
