const Path = require("path-parser");
const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

module.exports = app => {
  app.post("/api/movies", requireLogin, async (req, res) => {
    const {
      title,
      image,
      imdbRating,
      personalRating,
      personalReview,
      dateWatched
    } = req.body;

    // Create a new movie object with all of the appropriate fields
    const movie = new Movie({
      title,
      image,
      imdbRating,
      personalRating,
      personalReview,
      dateWatched,
      _user: req.user.id
    });

    try {
      // Save the movie to the user model
      await movie.save();
      const user = await req.user.save();

      // Send back the updated user model
      res.send(user);
    } catch (err) {
      res.status(401).send(err);
    }
  });
};
