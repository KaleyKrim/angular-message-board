//jshint esversion: 6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 8080;
const db = require('./models');
const apiRoutes = require('./api/index');

const User = db.user;
const Message = db.message;
const Topic = db.topic;

app.use(express.static('public'));

// app.use('/api', apiRoutes);


app.listen(port, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port: '${port}`);
});