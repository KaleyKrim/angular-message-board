angular.module('App')
.controller('UsersController', ['UserService', '$scope', '$routeParams', function(UserService, $scope){


  $scope.UserService = UserService;

  UserService.getUsers();

}]);