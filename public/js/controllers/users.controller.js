angular.module('App')
.controller('UsersController', ['UserService', '$scope', '$routeParams', function(UserService, $scope){


  $scope.UserService = UserService;

  $scope.newUser = {
    username: ''
  };

  $scope.addUser = function(e){
    UserService.addUser($scope.newUser);
  };

}]);