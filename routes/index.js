var express = require('express');
var mysql = require('mysql');
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KNohting Express，FK' });
});

module.exports = router;
