var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {

console.log(req.session);

if(!req.user){
res.redirect('/login');
}else{
  res.render('index', { user : req.user });
}



});



// Register page
router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
    Users.register(new Users({ username : req.body.username }), req.body.password, function(err, Users) {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/login');
            });
        });
    });
});

// Login page
router.get('/login', function(req, res) {
    res.render('login', { });
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function(req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', function(req, res){
  req.logout();
  req.session.save(function (err){
    if(err){
      return next(err);
    }
    res.redirect('/login');
  });
});



module.exports = router;
