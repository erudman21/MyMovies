const passport = require('passport');

module.exports = app => {
  // Google routes
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/movies');
    }
  );

  // local routes
  app.post(
    '/auth/local/register',
    passport.authenticate('local-register', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true
    })
  );

  app.get('/auth/local/register', (req, res) => {
    res.send(req.flash('error')[0]);
  });

  app.post(
    '/auth/local/login',
    passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true
    })
  );

  app.get('/auth/local/login', (req, res) => {
    res.send(req.flash('error')[0]);
  });

  // Facebook routes
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['public_profile', 'email']
    })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/movies');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', async (req, res) => {
    res.send(req.user);
  });
};
