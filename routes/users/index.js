//jshint esversion: 6

const express = require('express');
const router = express.Router();
const db = require('../../models');
const User = db.user;

router.get('/', (req, res) => {
  return User.findAll()
  .then(users => {
    return res.json(users);
  });
});

// router.post('/', (req, res) => {
//   let username = req.body.username;
//   return User.create( { username: username})
//   .then(newUser => {
//     return res.json(newUser);
//   });
// });

router.get('/:id', (req, res) => {
  let userId = req.params.id;

  return User.findById(userId)
  .then(user => {
    return res.send(user);
  });
});

module.exports = router;