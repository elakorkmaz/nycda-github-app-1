const express = require('express'),
      request = require('request'),
      morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.redirect('/profile');
});

app.get('/profile', (request, response) => {
  // this is where magic happens
  response.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
