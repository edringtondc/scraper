var router = require("express").Router();
var db = require("../../models");
var logger = require("morgan")


router.get('/', function(req, res){
    console.log( "/ route ", res)

    // res.render("articles",{articles:articles})


    res.render("./articles")
    
    // db.Article
    // .find({saved: false})
    // .then(function(articles){

    //     console.log(articles)
    //     res.render("articles",{articles:articles})
     

    // });
});

router.get('/saved', function(req, res){

    db.Article
    .find({saved: true})
    .then(function(note){
        res.render("layouts/saved", {note});
    });
});

module.exports = router;