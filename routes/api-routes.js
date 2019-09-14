var db = require("../models");

module.exports = function(app) {

    app.get("/api/reviews", function(req, res) {
        db.Review.findAll({}).then(function(dbReview) {
            res.json(dbReview);
        });
    });

    app.post("/api/reviews", function(req, res) {
        db.Review.create({
            artist: req.body.artist,
            song: req.body.song,
            author: req.body.author,
            review: req.body.review
        }).then(function(dbReview) {
            res.json(dbReview);
        }).catch(function(err) {
            res.json(err);
        });
    });

    app.delete("/api/reviews/:id", function(req, res) {
        db.Review.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbReview) {
            res.json(dbReview);
        });
    });

    app.put("/api/reviews", function(req, res) {
        db.Review.update({
            artist: req.body.artist,
            song: req.body.song,
            author: req.body.author,
            review: req.body.review
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbReview) {
            res.json(dbReview);
        }).catch(function(err) {
            res.json(err);
        });
    });


};