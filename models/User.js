const mongoose = require("mongoose");
const { Schema } = mongoose;
const movieSchema = require("./Movie");

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
