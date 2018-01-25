const Path = require('path-parser');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const TDAW = require('tdaw');
const keys = require('../config/keys');

const Movie = mongoose.model('movies');
const User = mongoose.model('users');

module.exports = app => {
	app.post('/api/movies/delete', requireLogin, async (req, res) => {
		try {
			Movie.findOneAndRemove({
				_user: req.user.id,
				title: req.body.movie.taitle
			}).exec();

			User.findById(req.user._id, (e, user) => {
				user.avgRating =
					user.numMovies <= 1
						? 0
						: (user.avgRating * user.numMovies -
								req.body.movie.personalRating) /
							(user.numMovies - 1);
				user.numMovies--;
				user.save((e, updatedUser) => {
					res.send(updatedUser);
				});
			});
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
			const temp = await tdaw.getRecommendations({
				q: title,
				type: 'movies',
				verbose: '1'
			}); 

			for (var i = 0; i < 5; i++) {
				recs[i] = {
					name: temp[i].Name,
					link: temp[i].yUrl
				};
			}
		} catch (e) {}

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

			User.findById(req.user._id, (e, user) => {
				user.numMovies++;
				user.avgRating +=
					(personalRating - user.avgRating) / user.numMovies;
				user.save((e, updatedUser) => {
					res.send(updatedUser);
				});
			});
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
