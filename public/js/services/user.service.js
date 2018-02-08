angular.module('App')
.service('UserService', ['$http', '$routeParams', '$location', '$window', function($http, $routeParams, $location, $window){

  var self = this;
  var usersUrl = '/api/users';


  this.users = [];
  this.user = [];


  this.getUsers = function(){
    $http.get(usersUrl)
    .then(function(response) {
      self.users = response.data;
    });
    return self.users;
  };

  this.findUserById = function(id){
    var author = null;
    for (var i = 0; i < self.users.length; i++) {
      if (self.users[i].id === id){
        author = self.users[i].username;
      }
    }
    return author;
  };

  this.findUserImageById = function(id){
    var image = null;
    for (var i = 0; i < self.users.length; i++) {
      if (self.users[i].id === id){
        image = self.users[i].image;
      }
    }
    return image;
  };

  this.getUser = function(){
    var apiUrl = 'api/users/' + parseInt($routeParams.param1);

    $http.get(apiUrl)
    .then(function(response){
      self.user = response.data;
  });
    return self.user;
  };

  this.addUser = function(newUser) {
    var user = {
      username: newUser.username,
      password: newUser.password,
      image: newUser.image
    };

    self.users.push(user);

    $http.post(usersUrl, user)
    .then(function(response) {
      console.log('Added user to database!');
      $location.path('/login');
    });
  };

  this.loginUser = function(userDetails){
    var user = {
      username: userDetails.username,
      password: userDetails.password
    };

    $http.post('/login', user)
    .then(function(response) {
      var username = response.data.username;
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('currentUser', username);
      console.log('loggedin?', localStorage.getItem('loggedIn'));
      $location.path('/');
      $window.location.reload();
    });
  };

  this.logOut = function(){
    $http.get('/logout')
    .then(function (response){
      localStorage.setItem('loggedIn', false);
      localStorage.setItem('currentUser', null);
      $location.path('/');
      $window.location.reload();
    });
  };

  this.getLoggedIn = function(){
    var loginStatus = localStorage.getItem('loggedIn');
    var loggedIn = {loggedIn : loginStatus};
    return loggedIn;
  };

  this.getCurrentUser = function(){
    var currentUser = localStorage.getItem('currentUser');
    return currentUser;
  };

}]);