angular.module('App')
.controller('RegisterController', ['UserService', '$scope', function(UserService, $scope){

  $scope.UserService = UserService;

  $scope.newUser = {
    username: '',
    password: '',
    image: ''
  };

  $scope.addUser = function(e){
    UserService.addUser($scope.newUser);
  };

  $scope.pickJelly = function(){
    $scope.newUser.image = '/assets/jelly.gif';
  };

  $scope.pickLazy = function(){
    $scope.newUser.image = '/assets/lazy.gif';
  };

  $scope.pickStars = function(){
    $scope.newUser.image = '/assets/stars.gif';
  };

  $scope.pickPlaty = function(){
    $scope.newUser.image = '/assets/platy.gif';
  };

  $scope.pickKitty = function(){
    $scope.newUser.image = '/assets/kitty.gif';
  };

}]);