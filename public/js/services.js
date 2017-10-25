angular.module('App')
.service('UserService', ['$http', function($http){

  var self = this;
  var usersUrl = '/api/users';
  var userUrl = '/api/users/:id';
  this.users = [];
  this.user = '';

  this.getAll = function(){
    $http.get(usersUrl)
    .then(function(response) {
      self.users = response.data;
    });
  };

  this.getUsers = function(){
    return users;
  };

  // this.getUser = function(id){
  //   console.log('id', id);
  //   for (var i = 0; i < self.users.length; i++) {
  //     if(self.users[i].id === id){
  //       return self.users[i];
  //     }
  //   }
  // };

  this.getUser = function(url){
    $http.get(url)
    .then(function(response){
      self.user = response.data;
    });
  };

  this.addUser = function(newUser) {
    var user = {
      username: newUser.username,
      password: newUser.password
    };

    self.users.push(user);

    $http.post(usersUrl, user)
    .then(function(response) {
      console.log('Added user to backend database!');
    });
  };

}]);