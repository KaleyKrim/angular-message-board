angular.module('App')
.controller('UserController', ['UserService', 'MessageService', 'TopicService', '$scope', '$routeParams', function(UserService, MessageService, TopicService, $scope, $routeParams){

  $scope.UserService = UserService;
  $scope.MessageService = MessageService;
  $scope.TopicService = TopicService;

  UserService.getUser();

  $scope.logOut = UserService.logOut;

  $scope.user = UserService.user;

  MessageService.getMessagesByAuthor();

  TopicService.getTopics();

  $scope.getTopicNameById = TopicService.getTopicNameById;



}]);