var createError = require('http-errors');
var https = require('https')
var http = require('http')
var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/csrf', (req,res) => {
  console.log("heres")
  res.sendFile(__dirname + '/public/csrf.html');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(3005, function () {
  console.log('Example app listening on port 3005');
});
module.exports = app;
