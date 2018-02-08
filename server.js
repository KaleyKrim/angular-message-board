const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 8080;
const db = require('./models');
const apiRoutes = require('./routes/index');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const User = db.user;
const Message = db.message;
const Topic = db.topic;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  User.findOne({ where: { id: user.id }})
  .then(user => {
    if(!user){
      return done(null, {});
    }else{
      return done(null, {
        id: user.id,
        username: user.username
      });
    }
  });
});

passport.use(new LocalStrategy(function(username, password, done){
  User.findOne({ where: { username: username } })
  .then(user => {
    if(user === null){
      return done(null, false, {message: 'bad username or password'});
    }else{
      bcrypt.compare(password, user.password)
      .then(res => {
        if(res){
          return done(null, user);
        }else{
          return done(null, false, {message: 'bad username or password'});
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  });
}));

app.post('/api/users', (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(req.body.password, salt, function (err, hash){
      User.create({
        username: req.body.username,
        password: hash,
        image: req.body.image
      })
      .then((newUser) => {
        return res.json(newUser);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  });
});

function isAuthenticated(req, res, next){
  if(req.isAuthenticared()){
    next();
  }else{
    console.log('Something went wrong...');
  }
}

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.json(req.user);
});

app.get('/logout', (req, res) => {
  let user = req.user;
  req.logout();
  res.json(user);
});

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public')});
});

app.listen(port, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: '${port}`);
});