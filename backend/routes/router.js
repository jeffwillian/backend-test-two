const router = require("express").Router();
const breweryController = require("../controllers/breweryController");

router.post("/brewerys", breweryController.create);
router.get("/brewerys", breweryController.index);
router.get("/brewerys", breweryController.findById);
router.patch("/brewerys", breweryController.update);
router.delete("/brewerys", breweryController.delete);

module.exports = router;
