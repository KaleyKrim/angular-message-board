angular.module('App')
.controller('TopicController', ['TopicService', 'MessageService', 'UserService', '$scope', '$routeParams', function(TopicService, MessageService, UserService, $scope, $routeParams){

  $scope.TopicService = TopicService;
  $scope.MessageService = MessageService;
  $scope.UserService = UserService;

  $scope.newMessage = {
    name: '',
    body: ''
  };

  TopicService.getTopic();
  MessageService.getMessages();


  $scope.addMessage = function(e){
    MessageService.addMessage($scope.newMessage);
  };

  $scope.findUserById = UserService.findUserById;


}]);