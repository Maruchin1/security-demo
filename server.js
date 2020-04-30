const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

// app.use(helmet.frameguard());

// Serve static files....
app.use(express.static(__dirname + '/dist/security-demo'));

// Send all requests to index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/security-demo/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
