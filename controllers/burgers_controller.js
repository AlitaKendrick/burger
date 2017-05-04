//dependencies
var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

//main page lists all burgers from db
router.get('/', function(req, res) {
  burger.allB(function(burger_data) {
    res.render('index', {burger_data});
  });
});

//route to post create and post new burgers 
router.post('/', function(req, res) {
  burger.newB(req.body.burger_name, function(result) {
    res.redirect('/');
  });
});


//route to move burger to devoured (true)
router.put('/:burger', function(req, res) {
  burger.devour(req.params.devoured, req.params.burger_name, function(result) {
    res.redirect('/');
  });
});


module.exports = router;



