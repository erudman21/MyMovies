const keys = require('../config/keys');

module.exports = app => {
	// Route for getting movie times for local theaters
	app.post('/theaters/movies', async (req, res) => {
		const { location, date } = req.body;
	});
};
