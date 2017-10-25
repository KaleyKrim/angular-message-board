angular.module('App')
.controller('RegisterController', ['UserService', '$scope', '$routeParams', function(UserService, $scope, $routeParams){

  $scope.UserService = UserService;

  $scope.newUser = {
    username: ''
  };

  $scope.addUser = function(e){
    UserService.addUser($scope.newUser);
  };

}]);