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
    $scope.newUser.image = UserService.pickCharacter('jelly');
  };

  $scope.pickLazy = function(){
    $scope.newUser.image = UserService.pickCharacter('lazy');
  };

  $scope.pickStars = function(){
    $scope.newUser.image = UserService.pickCharacter('stars');
  };

  $scope.pickPlaty = function(){
    $scope.newUser.image = UserService.pickCharacter('platy');
  };

  $scope.pickKitty = function(){
    $scope.newUser.image = UserService.pickCharacter('kitty');
  };



}]);