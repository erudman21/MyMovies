const OmdbApi = require("omdb-api-pt");
const keys = require("../config/keys");

const omdb = new OmdbApi({
  apiKey: keys.omdbKey,
  baseUrl: "http://www.omdbapi.com/"
});

module.exports = app => {
  app.post("/omdb/movie/short", async (req, res) => {
    const { title } = req.body;
    const movies = await omdb.bySearch({ search: title, type: "movie" });
    res.send(movies);
  });

  app.post("/omdb/movie/full", async (req, res) => {
    const { id } = req.body;
    const movie = await omdb.byId({ imdb: id, plot: "full" });
    res.send(movie);
  });
};
