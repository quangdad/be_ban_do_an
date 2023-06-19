const producerController = require("../../controllers/producerController");

const router = require("express").Router();

router.get("", producerController.getAll);
router.post("", producerController.create);
router.get("/:id", producerController.getById);
router.patch("/:id", producerController.updateById);
router.delete("/:id", producerController.deleteById);

module.exports = router;
