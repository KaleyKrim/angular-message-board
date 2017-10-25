angular.module('App')
.controller('UsersController', ['UserService', '$scope', '$routeParams', function(UserService, $scope, $routeParams){

  $scope.param1 = parseInt($routeParams.param1);

  $scope.UserService = UserService;

  $scope.getUser = UserService.getUser;

}]);