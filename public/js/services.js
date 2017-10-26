angular.module('App')
.service('UserService', ['$http', '$routeParams', function($http, $routeParams){

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
      password: newUser.password
    };

    self.users.push(user);

    $http.post(usersUrl, user)
    .then(function(response) {
      console.log('Added user to backend database!');
    });
  };

  this.loginUser = function(userDetails){
    var user = {
      username: userDetails.username,
      password: userDetails.password
    };

    $http.post('/login', user)
    .then(function(response) {
      console.log('logged in!');
    });
  };

}]);



angular.module('App')
.service('TopicService', ['$http', '$routeParams', function($http, $routeParams){

  var self = this;
  var topicsUrl = '/api/topics';

  this.topics = [];
  this.topic = [];

  this.getTopics = function(){
    $http.get(topicsUrl)
    .then(function(response){
      self.topics = response.data;
    });
    return self.topics;
  };

  this.getTopic = function(){
    var apiUrl = 'api/topics/' + parseInt($routeParams.param2);
    console.log('apiUrl', apiUrl);

    $http.get(apiUrl)
    .then(function(response){
      self.topic = response.data;
  });
    return self.topic;
  };

  this.addTopic = function(newTopic) {
    console.log('newTopic', newTopic);
    var topic = {
      name: newTopic.name
    };

    self.topics.push(topic);

    $http.post(topicsUrl, topic)
    .then(function(response) {
      console.log('Added topic to backend database!');
    });
  };


}]);