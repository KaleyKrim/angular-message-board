//jshint esversion: 6

const express = require('express');
const router = express.Router();
// const db = require('../models');

const messagesRoutes = require('./messages');
const topicsRoutes = require('./topics');
const usersRoutes = require('./users');


// router.use('/messages', messagesRoutes);
// router.use('/topics', topicsRoutes);
// router.use('/users', usersRoutes);


module.exports = router;