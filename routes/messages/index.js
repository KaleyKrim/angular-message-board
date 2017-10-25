//jshint esversion: 6

const express = require('express');
const router = express.Router();
const db = require('../../models');
const Message = db.message;

router.post('/', (req, res) => {
  let userId = req.user.id;
  let messageName = req.body.name;
  let messageBody = req.body.body;
  let topicId = req.body.topicId;

  return Message.create({ name: messageName, body: messageBody, author_id: userId, topic_id: topicId})
  .then(newMessage => {
    return res.send(newMessage);
  });
});

router.get('/latest', (req, res) => {

});

router.get('/by-topic/:topic_id', (req, res) => {

});

module.exports = router;