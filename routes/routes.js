var express = require('express')
var app = express.Router();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('home')
});
module.exports = app;
