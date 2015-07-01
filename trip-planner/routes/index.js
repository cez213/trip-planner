var express = require('express');
var router = express.Router();
// var Promise = require('bluebird');
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var ThingsToDo = require('../models').ThingsToDo;

/* GET home page. */
/*router.get('/', function(req, res, next){
	Hotel.find({}, function(err, hotels) {
	    Restaurant.find({}, function(err, restaurants) {
	        ThingsToDo.find({}, function(err, thingsToDo) {
	            res.render('index', {
	                all_hotels: hotels,
	                all_restaurants: restaurants,
	                all_things_to_do: thingsToDo
	            });
	        });
	    });
	});
})*/

router.get('/', function(req, res, next){
	var hotels, restaurants;
	Hotel.find({}).exec()
		.then(function(data){
			hotels = data;
			return Restaurant.find({}).exec();
		})
		.then(function(data){
			restaurants = data;
			return ThingsToDo.find({}).exec();
		})
		.then(function(thingsToDo){
			res.render('index', {
				all_hotels: hotels,
                all_restaurants: restaurants,
                all_things_to_do: thingsToDo
			})
		})
		.then(null, function(err){
			return next(err);
		})
});




module.exports = router;
