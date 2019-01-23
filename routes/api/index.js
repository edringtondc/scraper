var router = require("express").Router();
var noteRoutes = require("./notes")
var articleRoutes = require("./articles")
//onst articleController = require("../../controllers/article")


router.use("/", articleRoutes)
router.use("/notes", noteRoutes);
// router.get("/", articleController.findAll)



module.exports = router;