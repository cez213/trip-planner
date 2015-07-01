var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Place;
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: { type: String, required: true },
  city: String,
  state:   String,
  phone:   String,
  location: [Number]
});

Place = mongoose.model('Place', placeSchema);

module.exports = {
	Place: Place,
	placeSchema: placeSchema
};