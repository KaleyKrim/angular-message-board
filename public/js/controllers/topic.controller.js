angular.module('App')
.controller('TopicController', ['TopicService', 'MessageService', 'UserService', '$scope', '$routeParams', function(TopicService, MessageService, UserService, $scope, $routeParams){

  $scope.TopicService = TopicService;
  $scope.MessageService = MessageService;
  $scope.UserService = UserService;

  $scope.newMessage = {
    body: ''
  };

  TopicService.getTopic();
  MessageService.getMessages();

  $scope.loginObject = UserService.getLoggedIn();

  $scope.currentUser = UserService.getCurrentUser();

  $scope.addMessage = function(e){
    MessageService.addMessage($scope.newMessage);
    $scope.newMessage.body = '';
  };

  $scope.openEditForm = function(e){
    TopicService.openEditForm();
    $scope.editForm = localStorage.getItem('editForm');
  };

  $scope.editedTopic = {
    name: ''
  };

  $scope.editTopic = function(e){
    TopicService.editTopic($scope.editedTopic);
    $scope.editedTopic.name = '';
  };

  UserService.getUsers();
  $scope.findUserById = UserService.findUserById;
  $scope.findUserImageById = UserService.findUserImageById;


}]);