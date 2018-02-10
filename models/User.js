const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  localUsername: { type: String, unique: true },
  localPassword: String,
  googleId: String,
  facebookId: String,
  name: String,
  numMovies: { type: Number, default: 0 },
  avgRating: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
