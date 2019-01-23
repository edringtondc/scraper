const router = require("express").Router();
const articleController = require("../../controllers/article")

router.get("/clear", articleController.clear)
router.get("/scrape", articleController.scrape)
router.get("/all", articleController.findAll)
router.get("/:id", articleController.findOne)
router.put("/:id", articleController.update)
router.delete("/:id", articleController.deleteOne)


module.exports = router

