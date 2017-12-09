const express = require('express');
const mysql = require('mysql');
const router = express.Router()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KNohting Express，FK' });
});

/* Post home page.*/
router.post('/postFuck',function (req,res) {
    var json = {name:"KNothing",height:"1.90",age:"100"};
    res.json(json)
})

module.exports = router;


