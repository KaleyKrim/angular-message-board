angular.module('App', ['ngRoute']);

var app = angular.module('App')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){


  $routeProvider
  .when('/users', {
    templateUrl: '/views/users.html',
    controller: 'UsersController'
  })
  .otherwise({
    template: '<h1>Helooo</h1>'
  });

  $locationProvider.html5Mode(true);

}])
.run(['APP_VERSION', '$rootScope', function(APP_VERSION, $rootScope){
  $rootScope.APP_VERSION = APP_VERSION;
}]);