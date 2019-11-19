var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/con', function (req, res, next) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "556556"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  res.send(200);
});

router.get('/bla', function (req, res, next){
  console.log('bla');
  res.send(200);
})

module.exports = router;
