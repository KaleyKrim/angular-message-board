angular.module('App')
.controller('RegisterController', ['UserService', '$scope', function(UserService, $scope){

  $scope.UserService = UserService;

  $scope.newUser = {
    username: '',
    password: ''
  };

  $scope.addUser = function(e){
    UserService.addUser($scope.newUser);
  };

}]);