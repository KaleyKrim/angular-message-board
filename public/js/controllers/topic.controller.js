angular.module('App')
.controller('TopicController', ['TopicService', '$scope', '$routeParams', function(TopicService, $scope, $routeParams){

  $scope.TopicService = TopicService;

  TopicService.getTopic();

}]);