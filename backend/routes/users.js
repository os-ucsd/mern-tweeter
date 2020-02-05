const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
	res.send('<h1>User Request</h1>');
});

router.route('/add').post((req, res) => {
	const name = req.body.name;
	res.send('<h1>Hi, my name is ' + name + '</h1')
});

module.exports = router;
