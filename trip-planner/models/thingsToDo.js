var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
var Place = require('./place');
var placeSchema = Place.placeSchema;

var ThingsToDo;
var Schema = mongoose.Schema;

var thingsToDoSchema = new Schema({
  name: String,
  place: [placeSchema],
  age_range: String
});

ThingsToDo = mongoose.model('ThingsToDo', thingsToDoSchema);

module.exports = ThingsToDo;