angular.module('App')
.controller('TopicController', ['TopicService', 'MessageService', '$scope', '$routeParams', function(TopicService, MessageService, $scope, $routeParams){

  $scope.TopicService = TopicService;
  $scope.MessageService = MessageService;

  $scope.newMessage = {
    name: '',
    body: ''
  };

  TopicService.getTopic();

  MessageService.getMessages();

  $scope.addMessage = function(e){
    MessageService.addMessage($scope.newMessage);
  };

}]);