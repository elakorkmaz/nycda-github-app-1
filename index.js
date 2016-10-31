const express = require('express'),
      request = require('request'),
      morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.redirect('/profile');
});

app.get('/profile', (req, res) => {
  request({
    method: 'GET',
    url: 'https://api.github.com/users/izelnakri',
    headers: {
      'User-Agent': 'Izels awesome JS Code'
    }
  }, (error, response, body) => {
    if (!error) {
      res.type('application/json');
      res.send(body);
    } else {
      res.status(500).end();
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
