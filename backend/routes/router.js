const router = require("express").Router();

//Routes
const breweryRouter = require("./brewery")

router.use("/", breweryRouter)

module.exports = router;