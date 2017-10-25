const express = require('express');
const router = express.Router(); // eslint-disable-line

const users = [
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
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
    users
  });
});

router.post('/addUser', (req, res) => {
  users.push(req.body);
  res.render('index', {
    title: 'Express',
    users
  });
});

module.exports = router;
