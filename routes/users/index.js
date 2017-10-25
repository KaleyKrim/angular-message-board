//jshint esversion: 6

const express = require('express');
const router = express.Router();
const db = require('../../models');
const User = db.user;

const bcrypt = require('bcrypt');
const saltRounds = 12;

router.get('/', (req, res) => {
  return User.findAll()
  .then(users => {
    return res.json(users);
  });
});

router.post('/', (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(req.body.password, salt, function (err, hash){
      User.create({
        username: req.body.username,
        password: hash
      })
      .then((user) => {
        console.log(user);
        res.redirect('/');
      });
    });
  });
});

router.get('/:id', (req, res) => {
  let userId = req.params.id;

  return User.findById(userId)
  .then(user => {
    return res.send(user);
  });
});

module.exports = router;