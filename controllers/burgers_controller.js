//dependencies
var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

//main page lists all burgers from db
router.get('/', function(req, res) {
  burger.findAllBurgers(function(burger_data) {
    res.render('index', {burger_data});
  });
});

//route to post create and post new burgers 
router.post('/create', function(req, res) {
  burger.addBurger(req.body.burger_name, function(result) {
    res.redirect('/');
  });
});


//route to move burger to devoured (true)
router.post('/devour/:burger', function(req, res) {
  burger.devourBurger(req.params.burger, function(result) {
    res.redirect('/');
  });
});


module.exports = router;



