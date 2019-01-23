var router = require("express").Router();
var noteRoutes = require("./notes")
var articleRoutes = require("./articles")


router.use("/articles", articleRoutes)
router.use("/notes", noteRoutes);




module.exports = router;