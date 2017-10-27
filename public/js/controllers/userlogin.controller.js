angular.module('App')
.controller('UserLoginController', ['UserService', '$scope', '$routeParams', function(UserService, $scope, $routeParams){

  $scope.UserService = UserService;

  $scope.logOut = UserService.logOut;
  $scope.user = UserService.user;


}]);