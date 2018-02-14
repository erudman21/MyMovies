const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// Turn user mongoose model into an id to identify the user on site
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Turn id into a mongoose model instance to identify user in mongo
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Google auth
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // Check for existing users, creates a new user if not existing
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        googleId: profile.id,
        name: profile.displayName
      }).save();
      done(null, user);
    }
  )
);

// Local register
passport.use(
  'local-register',
  new LocalStrategy(async (username, password, done) => {
    const existingUser = await User.findOne({ localUsername: username });
    if (existingUser) {
      return done(null, false, { message: 'That username is already taken' });
    }
    const user = await new User({ localUsername: username });
    user.localPassword = user.generateHash(password);
    user.save();
    done(null, user);
  })
);

passport.use(
  'local-login',
  new LocalStrategy(async (username, password, done) => {
    const existingUser = await User.findOne({ localUsername: username });

    if (!existingUser)
      return done(null, false, { message: 'Incorrect username' });
    if (!existingUser.validPassword(password))
      return done(null, false, { message: 'Incorrect password' });
    done(null, existingUser);
  })
);

// Facebook auth
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookID,
      clientSecret: keys.facebookSecret,
      callbackURL: '/auth/facebook/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        facebookId: profile.id,
        name: profile.displayName
      }).save();
      done(null, user);
    }
  )
);
