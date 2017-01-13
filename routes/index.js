var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/hello', function (req, res) {
  res.send({
    name: "hanbit",
      greeting: "hello"
  });

});
module.exports = router;
