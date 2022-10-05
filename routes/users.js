var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool/', function(req, res, next) {
  res.send('you are so cool');
});

module.exports = router;
