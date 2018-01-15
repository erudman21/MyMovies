const Path = require("path-parser");
const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Movie = mongoose.model("movies");

module.exports = app => {
  app.post("/api/movies/delete", requireLogin, async (req, res) => {
    const deletedMovie = await Movie.find({
      _user: req.user.id,
      title: req.body.title
    }).remove();

    try {
      const user = await req.user.save();

      // Send back the updated user model
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/movies", requireLogin, async (req, res) => {
    const movies = await Movie.find({ _user: req.user.id });
    res.send(movies);
  });

  app.post("/api/movies", requireLogin, async (req, res) => {
    const {
      title,
      image,
      officialRatings,
      runtime,
      genre,
      year,
      director,
      plot,
      dateSeen,
      personalRating,
      personalComments
    } = req.body;

    // Create a new movie object with all of the appropriate fields
    const movie = new Movie({
      title,
      image,
      officialRatings,
      runtime,
      genre,
      year,
      director,
      plot,
      dateSeen,
      personalRating,
      personalComments,
      _user: req.user.id
    });

    try {
      // Save the movie to the user model
      await movie.save();
      const user = await req.user.save();

      // Send back the updated user model
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
