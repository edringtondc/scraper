var router = require("express").Router();
var db = require("../../models");
var logger = require("morgan")


router.get('/', function(req, res){
    console.log( "/ route ", res)

    // res.render("articles",{articles:articles})


    // res.render("./articles")
    // res.render("articles",{articles:articles})
    
    db.Article
    .find({})
    .then(function(articles){

        console.log(articles)
        res.render("articles",{articles: articles})
     

    });
});

router.get('/saved', function(req, res){

    db.Article
    .find({saved: true})
    .populate("note")
    .then(function(articles){
        console.log(articles)
        res.render("saved", {articles: articles});
    });
});

module.exports = router;