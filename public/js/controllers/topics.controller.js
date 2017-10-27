angular.module('App')
.controller('TopicsController', ['TopicService', 'UserService', '$scope', function(TopicService, UserService, $scope){
  $scope.TopicService = TopicService;
  $scope.UserService = UserService;
  TopicService.getTopics();

    $scope.newTopic = {
    name: ''
  };

  $scope.loggedIn = localStorage.getItem('loggedIn');

  $scope.addTopic = function(e){
    TopicService.addTopic($scope.newTopic);
  };

  UserService.getUsers();
  $scope.findUserById = UserService.findUserById;

}]);