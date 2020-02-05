const express = require('express');
const tweetRoute = require('./routes/tweets');
const userRoute = require('./routes/users');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/users', userRoute);

app.listen(3000);
