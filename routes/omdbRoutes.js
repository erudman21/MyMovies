const OmdbApi = require("omdb-api-pt");
const keys = require("../config/keys");

const omdb = new OmdbApi({
  apiKey: keys.omdbKey,
  baseUrl: "http://www.omdbapi.com/"
});

module.exports = app => {
  // short = title, year, imdbID, type, and poster
  // Used for quick data to be displayed in search bar
  app.post("/omdb/movie/short", async (req, res) => {
    const { title } = req.body;
    const movies = await omdb.bySearch({ search: title, type: "movie" });
    res.send(movies);
  });

  // More robust request, returns significantly more data on the movie
  // Used for new movie display
  app.post("/omdb/movie/full", async (req, res) => {
    const { id } = req.body;
    const movie = await omdb.byId({ imdb: id, plot: "full" });
    res.send(movie);
  });
};
