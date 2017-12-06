angular.module('App', ['ngRoute']);

var app = angular.module('App')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){


  $routeProvider
  .when('/users/:param1', {
    templateUrl: '/views/user.html',
    controller: 'UserController'
  })
  .when('/users', {
    templateUrl: '/views/users.html',
    controller: 'UsersController'
  })
  .when('/register', {
    templateUrl: '/views/register.html',
    controller: 'RegisterController'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginController'
  })
  .when('/topics/:param2', {
    templateUrl: '/views/topic.html',
    controller: 'TopicController'
  })
  .when('/latest', {
    templateUrl: '/views/latest.html',
    controller: 'LatestController'
  })
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'TopicsController'
  })
  .otherwise({
    templateUrl: '/views/notFound.html'
  });

  $locationProvider.html5Mode(true);

}])
.run(['APP_VERSION', '$rootScope', function(APP_VERSION, $rootScope){
  $rootScope.APP_VERSION = APP_VERSION;
}]);