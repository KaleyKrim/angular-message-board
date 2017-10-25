angular.module('App')
.controller('UserController', ['UserService', '$scope', '$routeParams', function(UserService, $scope, $routeParams){

  var apiUrl = '/api/users/' + parseInt($routeParams.param1);

  $scope.UserService = UserService;

  UserService.getUser(apiUrl);

}]);