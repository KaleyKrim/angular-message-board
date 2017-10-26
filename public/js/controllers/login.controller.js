angular.module('App')
.controller('LoginController', ['UserService', '$scope', function(UserService, $scope){
  $scope.UserService = UserService;

  $scope.userDetails = {
    username: '',
    password: ''
  };

  $scope.login = function(e){
    UserService.loginUser($scope.userDetails);
  };

}]);