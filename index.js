const express = require('express'),
      request = require('request'),
      pug = require('pug'),
      morgan = require('morgan');

var app = express();

app.set('view engine', 'pug');

app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.redirect('/profile');
});

app.get('/:username', (req, res) => {
  request({
    method: 'GET',
    url: 'https://api.github.com/users/' + req.params.username,
    headers: {
      'User-Agent': 'Izels awesome JS Code'
    }
  }, (error, response, body) => {
    if (!error) {
      res.render('users/show', { user: JSON.parse(body) });
    } else {
      res.status(500).end();
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
