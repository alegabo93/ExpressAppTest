var express = require('express');
var router = express.Router();

var users = [
  {
    name: 'Ale',
    age: 24
  },
  {
    name: 'Rosy',
    age: 35
  },
  {
    name: 'Paty',
    age: 28
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express',
    users: users
  });
});

router.post('/addUser', function(req, res) {
  users.push(req.body);
  res.render('index', {
    title: 'Express',
    users: users
  });
});

module.exports = router;
