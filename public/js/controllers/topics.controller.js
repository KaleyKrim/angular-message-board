angular.module('App')
.controller('TopicsController', ['TopicService', '$scope', function(TopicService, $scope){
  $scope.TopicService = TopicService;
  TopicService.getTopics();

    $scope.newTopic = {
    name: ''
  };

  $scope.loggedIn = localStorage.getItem('loggedIn');

  $scope.addTopic = function(e){
    TopicService.addTopic($scope.newTopic);
  };
}]);