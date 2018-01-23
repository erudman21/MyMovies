const keys = require('../config/keys');
const axios = require('axios');

module.exports = app => {
	// Route for getting movie times for local theaters
	app.post('/theaters/movies', async (req, res) => {
		const { location, date } = req.body;

		try {
			const res = await axios.get(
				`http://data.tmsapi.com/v1.1/movies/showings?startDate=${date}&lat=${
					location.lat
				}&lng=${location.long}&imageSize=Sm&api_key=${keys.gracenoteKey}`
			);

			const showtimes = [];

			res.data.forEach(movie => {
				console.log(movie);
				showtimes.push({ title: movie.title, showtimes: movie.showtimes });
			});
			console.log(showtimes);
		} catch (e) {
			console.log(e);
		}
	});
};
