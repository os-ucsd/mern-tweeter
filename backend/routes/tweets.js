const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.send('<h1>Tweet Request</h1>');
 });
 
 router.route('/add').post((req, res) => {
  res.send('<h1>Add new tweet</h1>');
});

module.exports = router;
