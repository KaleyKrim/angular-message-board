//jshint esversion: 6

const express = require('express');
const router = express.Router();
const db = require('../../models');
const Message = db.message;

router.post('/', (req, res) => {
  let messageBody = req.body.body;
  let topicId = req.body.topicId;
  let userId = req.user.id;

  return Message.create({ body: messageBody, author_id: userId, topic_id: topicId})
  .then(newMessage => {
    return res.json(newMessage);
  })
  .catch((err) => {
    console.log(err);
  });

});

router.get('/latest', (req, res) => {
  return Message.findAll({
    order: [
      ['createdAt', 'DESC']
    ],
    limit: 10
  })
  .then(message => {
    return res.json(message);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:id', (req, res) => {
  let userId = parseInt(req.params.id);

  return Message.findAll({
    where: {
      author_id : userId
    }
  })
  .then(message => {
    return res.json(message);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/by-topic/:topic_id', (req, res) => {
  let topicId = req.params.topic_id;

  return Message.findAll({
    where: {
      topic_id : topicId
    }
  })
  .then(message => {
    return res.json(message);
  })
  .catch((err) => {
    console.log(err);
  });

});

module.exports = router;