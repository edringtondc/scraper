var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models")

module.exports = {
    clear: function (req, res) {
        db.Article
            .deleteMany({})
            .then(function (articles) {
                return db.Note.deleteMany({})
            })
            .then(function () {
                res.send("all deleted")
            })
    },
    scrape: function (req, res) {
        axios.get("https://www.wholesomeyum.com/").then(function (response) {

        
            var $ = cheerio.load(response.data);

            $("h2.entry-title").each(function (i, element) {

                var title = $(element).children().text();
                var link = $(element).find("a").attr("href");

                const article = {}

                article.title = title
                article.link = link

                db.Article.create(article)
                console.log(article);
            });
            

        });
        res.send("scraped")
        
    },
    findAll: function (req, res) {
        db.Article.find().then(function (articles) {
            console.log(articles)
            res.render("articles",{articles:articles})
        })

    },
    findOne: function (req, res) {
        db.Article.findById(req.params.id).populate("note").then(function (articles) {
            res.json(articles)
        })

    },
    update: function (req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function (article) {
                res.json(article)
            })

    },
    deleteOne: function (req, res) {
        db.Article
            .deleteOne({
                _id: req.params.id
            }).then(function (article) {
                res.json(article)
            })

    },

    //findAll, findOne, update, deleteOne
}