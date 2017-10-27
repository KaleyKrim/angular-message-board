angular.module('App')
.controller('LatestController', ['MessageService', 'TopicService', 'UserService', '$scope', function(MessageService, TopicService, UserService, $scope) {

  $scope.MessageService = MessageService;
  $scope.TopicService = TopicService;
  $scope.UserService = UserService;

  MessageService.getLatest();

  $scope.getTopicNameById = TopicService.getTopicNameById;

  UserService.getUsers();
  $scope.findUserById = UserService.findUserById;


}]);