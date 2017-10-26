//jshint esversion: 6

const express = require('express');
const router = express.Router();
const db = require('../../models');
const Topic = db.topic;

router.get('/', (req, res) => {
  return Topic.findAll()
  .then(topics => {
    return res.json(topics);
  });
});

router.get('/:id', (req, res) => {
  let topicId = req.params.id;

  return Topic.findById(topicId)
  .then(topic => {
    return res.json(topic);
  });
});

router.post('/', (req, res) => {
  let topicName = req.body.name;
  // let userId = req.body.created_by;
  let userId = req.user.id;

  return Topic.create( { name: topicName, created_by: userId})
  .then(newTopic => {
    return res.json(newTopic);
  });
});

router.put('/:id', (req, res) => {
  let newInfo = req.body;
  let topicId = req.params.id;

  return Topic.findById(topicId)
  .then(topic => {
    return Topic.update(newInfo, {
      where: [{id: topicId}]
    })
    .then(topic => {
      return res.send(topic);
    });
  });
});

module.exports = router;