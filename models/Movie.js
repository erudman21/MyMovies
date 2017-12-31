const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  image: String,
  imdbRating: String,
  personalRating: String,
  personalReview: String,
  dateWatched: Date,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  imdbURL: String
});

mongoose.model("movies", movieSchema);
