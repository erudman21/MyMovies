const mongoose = require("mongoose");
const { Schema } = mongoose;
const movieSchema = require("./Movie");

const userSchema = new Schema({
  googleId: String,
  movies: [movieSchema]
});

mongoose.model("users", userSchema);
