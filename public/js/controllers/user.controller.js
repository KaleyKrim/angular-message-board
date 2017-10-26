angular.module('App')
.controller('UserController', ['UserService', '$scope', '$routeParams', function(UserService, $scope, $routeParams){

  $scope.UserService = UserService;

  UserService.getUser();

  $scope.user = UserService.user;

}]);