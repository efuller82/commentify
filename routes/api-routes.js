var db = require("../models");

//require("dotenv").config();
var SpotifyAPI = require("./SpotifyAPI");
//var keys = require("../keys.js");
var configKey = {
    //borrowing due to testing
    id: "34e84d93de6a4650815e5420e0361fd3",
    secret: "5162cd8b5cf940f48702dffe096c2acb"
};

var spotify = new SpotifyAPI(configKey);
//var spotify = new SpotifyAPI(keys.spotify);

module.exports = function(app) {

    app.post("/api/Spotify", function(req, res) {
        //console.log(req.body.song);
        spotify.getSong(req.body.song, (error, data) => {
            if(error) {
                console.log(error);
                return;
            }
            res.json(data);
        });
    });

    app.get("/api/reviews", function(req, res) {
        db.Review.findAll({}).then(function(dbReview) {
            res.json(dbReview);
        });
    });

    app.get("/api/reviews/:author", function(req, res) {
        console.log(req.params);
        db.Review.findAll({
            where: {
                author: req.params.author
            }
        }).then(function(dbReview) {
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