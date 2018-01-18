const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
	title: String,
	image: String,
	officialRatings: [{ Source: String, Value: String }],
	year: String,
	director: String,
	dateSeen: Date,
	personalRating: Number,
	personalComments: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('movies', movieSchema);
