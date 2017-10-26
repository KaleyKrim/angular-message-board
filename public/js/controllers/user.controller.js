angular.module('App')
.controller('UserController', ['UserService', 'MessageService', '$scope', '$routeParams', function(UserService, MessageService, $scope, $routeParams){

  $scope.UserService = UserService;

  UserService.getUser();

  $scope.user = UserService.user;

  $scope.MessageService = MessageService;

  MessageService.getMessagesByAuthor();

}]);