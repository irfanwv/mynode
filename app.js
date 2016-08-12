var express = require('express');
var app = express();

var router = express.Router();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

var birds = require('./birds');

app.use('/birds', birds);
  
module.exports = router;

app.set('views', './views')
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3019);