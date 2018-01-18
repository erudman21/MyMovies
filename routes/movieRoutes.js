const Path = require('path-parser');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const TDAW = require('tdaw');
const keys = require('../config/keys');

const Movie = mongoose.model('movies');

module.exports = app => {
	app.post('/api/movies/delete', requireLogin, async (req, res) => {
		const deletedMovie = await Movie.find({
			_user: req.user.id,
			title: req.body.title
		}).remove();

		try {
			const user = await req.user.save();

			// Send back the updated user model
			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});

	app.get('/api/movies', requireLogin, async (req, res) => {
		const movies = await Movie.find({ _user: req.user.id });
		// Reverse movies so newly added movies appear first
		movies.reverse();
		res.send(movies);
	});

	app.post('/api/movies', requireLogin, async (req, res) => {
		const {
			title,
			image,
			officialRatings,
			year,
			director,
			dateSeen,
			personalRating,
			personalComments
		} = req.body;

		const tdaw = new TDAW({ apiKey: keys.tdKey });
		let recs = [];

		try {
			let temp = await tdaw.getRecommendations({
				q: title,
				type: 'movies'
			});

			for (var i = 0; i < 5; i++) {
				recs[i] = temp[i].Name;
			}
		} catch (e) {
			console.log(e);
		}

		// Create a new movie object with all of the appropriate fields
		const movie = new Movie({
			title,
			image,
			officialRatings,
			year,
			director,
			recs,
			dateSeen,
			personalRating,
			personalComments,
			_user: req.user.id
		});

		try {
			// Save the movie to the user model
			await movie.save();
			const user = await req.user.save();

			// Send back the updated user model
			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
