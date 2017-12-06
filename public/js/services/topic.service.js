angular.module('App')
.service('TopicService', ['$http', '$routeParams', '$route', function($http, $routeParams, $route){

  var self = this;
  var topicsUrl = '/api/topics';

  this.topics = [];
  this.topic = [];
  this.editForm = false;

  this.openEditForm = function(){
    if(self.editForm === false){
      self.editForm = true;
    }else{
      self.editForm = false;
    }
    localStorage.setItem('editForm', self.editForm);
    return localStorage.getItem('editForm');
  };

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
    })
    .catch(function(err){
      console.log(err);
    });
  };

  this.editTopic = function(editedTopic){
    var topic = {
      name: editedTopic.name
    };

    var apiUrl = 'api/topics/' + parseInt($routeParams.param2);

    $http.put(apiUrl, topic)
    .then(function(response) {
      var index = null;
      for (var i = 0; i < self.topics.length; i++) {
        if(self.topics[i].id === $routeParams.param2){
          index = i;
        }
      }
      self.topics.splice(i, 1, response.data);
      $route.reload();
    });
  };

}]);