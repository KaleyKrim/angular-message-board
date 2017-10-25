angular.module('App')
.service('UserService', ['$http', function($http){

  var self = this;
  var url = '/api/users';
  this.users = [];

  $http.get(url)
  .then(function(response) {
    self.users = response.data;
  });

  this.getUsers = function(){
    return users;
  };


  // $http.post(url, user)
  // .then(function(response){
  //   console.log('user added to database');
  // });

  // this.getUsers = function($http){
  //   var self = this;
  //   return $http.get('http://localhost:8080/api/users')
  //   .then(function(response) {
  //     return response.data;
  //   });
  // };

// UserService.setUrl('http://localhost:8080/api/users');

}]);