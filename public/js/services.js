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
      console.log('loggedin?', localStorage.getItem('loggedIn'));
      $location.path('/');
      $window.location.reload();
    });
  };

  this.logOut = function(){
    $http.get('/logout')
    .then(function (response){
      localStorage.setItem('loggedIn', false);
      console.log('loggedin?', localStorage.getItem('loggedIn'));
      $location.path('/');
      $window.location.reload();
    });
  };

  this.getLoggedIn = function(){
    var loginStatus = localStorage.getItem('loggedIn');
    var loggedIn = {loggedIn : loginStatus};
    return loggedIn;
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

    $http.get(apiUrl)
    .then(function(response){
      self.topic = response.data;
  });
    return self.topic;
  };

  this.getTopicNameById = function(id){
    var topicName = null;
    for (var i = 0; i < self.topics.length; i++) {
      if(self.topics[i].id === id){
        topicName = self.topics[i].name;
      }
    }
    return topicName;
  };

  this.addTopic = function(newTopic) {
    var topic = {
      name: newTopic.name
    };

    $http.post(topicsUrl, topic)
    .then(function(response) {
      console.log('Added topic to backend database!');
      self.topics.push(response.data);
    });
  };

}]);

angular.module('App')
.service('MessageService', ['$http', '$routeParams', function($http, $routeParams){

  var self = this;
  var newMessageApi = 'api/messages/';
  var latestApi = '/api/messages/latest';


  this.messages = [];
  this.latestMessages = [];
  this.authorMessages = [];

  this.getMessages = function(){
    var byTopicApi = '/api/messages/by-topic/' + parseInt($routeParams.param2);
    $http.get(byTopicApi)
    .then(function(response) {
      self.messages = response.data;
    });
    return self.messages;
  };

  this.getMessagesByAuthor = function(){
    var byAuthorApi = '/api/messages/' + parseInt($routeParams.param1);

    $http.get(byAuthorApi)
    .then(function(response) {
      console.log(response.data);
      self.authorMessages = response.data;
    });
    return self.authorMessages;
  };

  this.addMessage = function(newMessage){
    var message = {
      body: newMessage.body,
      topicId: parseInt($routeParams.param2)
    };

    $http.post(newMessageApi, message)
    .then(function(response) {
      console.log('message posted to database!!');
      self.messages.push(response.data);
    });
  };

  this.getLatest = function(){
    $http.get(latestApi)
    .then(function(response) {
      self.messages = response.data;
    });
    return self.messages;
  };

}]);