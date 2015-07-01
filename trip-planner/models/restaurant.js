var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
var Place = require('./place');
var placeSchema = Place.placeSchema;

var Restaurant;
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: String,
  place: [placeSchema],
  cuisine:   String,
  price: {type: Number, min: 1, max: 5}
});

Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;