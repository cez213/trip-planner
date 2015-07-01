//may not need mongoose stuff....
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Hotel = require('./hotel');
var Place = require('./place');
var Restaurant = require('./restaurant');
var ThingsToDo = require('./thingsToDo');

module.exports = {
	Hotel: Hotel,
	Place: Place.Place,
	Restaurant: Restaurant,
	ThingsToDo: ThingsToDo
};