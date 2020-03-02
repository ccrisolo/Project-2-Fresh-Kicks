const router = require('express').Router();
const passport = require('passport');


/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/members');
});

//login route below
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


//Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/members',
    failureRedirect : '/members'
  }
));

//OAuth logout route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/members');
});


module.exports = router;
