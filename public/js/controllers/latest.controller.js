angular.module('App')
.controller('LatestController', ['MessageService', 'TopicService', '$scope', function(MessageService, TopicService, $scope) {

  $scope.MessageService = MessageService;
  $scope.TopicService = TopicService;

  MessageService.getLatest();

  $scope.getTopicNameById = TopicService.getTopicNameById;

}]);