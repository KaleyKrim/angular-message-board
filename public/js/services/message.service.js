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