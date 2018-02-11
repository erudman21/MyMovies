const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
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

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.localPassword);
};

mongoose.model('users', userSchema);
