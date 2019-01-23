var router = require("express").Router();
var apiRoutes = require("./api")
var viewRoutes = require("./view")

// any thing in apiRoutes will start with /api
router.use("/api", apiRoutes)
// anything in viewRoutes will start with /
router.use("/", viewRoutes)

module.exports = router