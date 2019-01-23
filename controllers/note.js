//db
var db = require("../models")

//mod.exp
    // clear
    // scrape
    // findAll
    // findOne
    // deleteOne

    module.exports ={
        clear: function(req,res){
            db.Note
            .deleteMany({})
            .then(function(articles){
                return db.Note.deleteMany({})
            })
            .then(function(){
                res.send("all deleted")
            })
        },
        findAll: function(req, res){
            db.Note.find().then(function(articles){
                res.json(articles)
            })
        },
        findOne: function(req, res){
            db.Note.findById(req.params.id).populate("note").then(function(articles){
                res.json(articles)
            })
        },
        create: function(req, res){
            db.Note.create(req.body, function(err){
                if (err) throw err
            })
        },
        update: function(req, res){
            db.Article
                .findOneAndUpdate({_id: req.params.id}, req.body)
                .then(function(article){
                res.json(article)
            })
        },
        deleteOne: function(req, res){
            db.Article
            .deleteOne({
                _id: req.params.id
            }).then(function(article){
                res.json(article)
            })
        }
        //findAll, findOne, update, deleteOne
    }