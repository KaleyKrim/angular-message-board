//jshint esversion: 6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 8080;
const db = require('./models');
const apiRoutes = require('./routes/index');
const path = require('path');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
// const redis = require('connect-redis')(session);

const User = db.user;
const Message = db.message;
const Topic = db.topic;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(session({
  // store: new redis(),
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
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.use(new LocalStrategy(function(usrname, password, done){
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
      });
    }
  });
}));

function isAuthenticated(req, res, next){
  if(req.isAuthenticared()){
    next();
  }else{
    res.redirect('/');
  }
}

app.post('/login', passport.authenticate('local', {
  successRedirect: '/gallery',
  failureRedirect: '/login'
}));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public')});
});

app.listen(port, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port: '${port}`);
});