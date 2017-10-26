angular.module('App')
.controller('TopicsController', ['TopicService', '$scope', function(TopicService, $scope){
  $scope.TopicService = TopicService;
  TopicService.getTopics();
}]);