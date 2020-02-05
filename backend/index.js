const express = require('express');
const tweetRoute = require('./routes/tweets');
const userRoute = require('./routes/users');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true})));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/users', userRoute);

app.listen(3000);
