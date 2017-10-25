angular.module('App')
.controller('UsersController', ['UserService', '$scope', function(UserService, $scope){

  $scope.UserService = UserService;

  // $scope.users = UserService.users;

  // $scope.getUsers = function(){
  //   UserService.getUsers();
  // };

  // UserService.getUsers()
  // .then(function(users){
  //   $scope.users = users;
  // });


}]);