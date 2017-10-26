angular.module('App')
.controller('NewtopicController', ['TopicService', '$scope', '$routeParams', function(TopicService, $scope, $routeParams){

  $scope.TopicService = TopicService;

}]);