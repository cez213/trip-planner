var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
var Place = require('./place');
var placeSchema = Place.placeSchema;

var Hotel;
var Schema = mongoose.Schema;

var hotelSchema = new Schema({
  name: { type: String, required: true },
  place: [placeSchema],
  num_stars: { type: Number, min: 1, max: 5},
  amenities:   String,
});

Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;