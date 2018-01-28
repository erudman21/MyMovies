const PythonShell = require('python-shell');

module.exports = app => {
  app.get('/fandango/movies', (req, res) => {
    const pyshell = new PythonShell('scripts/fandango_scraper.py', {
      mode: 'json'
    });

    pyshell.on('message', message => {
      res.send(message);
    });

    pyshell.end(err => {
      if (err) throw err;
    });
  });
};
