angular.module('App')
.controller('LatestController', ['MessageService', '$scope', function(MessageService, $scope) {

  $scope.MessageService = MessageService;

  MessageService.getLatest();

}]);