var router = require('express').Router();

var articlesController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/")
.get(articlesController.findAll)
.post(articlesController.create);

// Matches with "/api/articles/:id"
router
.route("/:id")
.get(articlesController.findById)
.put(articlesController.update)
.delete(articlesController.remove);

    
module.exports = router; 