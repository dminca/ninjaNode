var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('oops! its supposed to be a list of users here');
});

module.exports = router;
