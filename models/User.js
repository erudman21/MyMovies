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

userSchema.pre('save', function(next) {
  var user = this;

  if (user.localPassword) {
    if (!user.isModified('localPassword')) return next();

    bcrypt.genSalt(5, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(user.localPassword, salt, null, (err, hash) => {
        if (err) return next(err);
        user.localPassword = hash;
        next();
      });
    });
  }
});

userSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

mongoose.model('users', userSchema);
