angular.module('App')
.controller('UserLoginController', ['UserService', '$scope', '$routeParams', function(UserService, $scope, $routeParams){

  $scope.UserService = UserService;

  $scope.loginObject = UserService.getLoggedIn();

  $scope.logOut = UserService.logOut;


}]);