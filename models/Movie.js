const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  dateSeen: Date,
  personalRating: Number,
  personalComments: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("movies", movieSchema);
