angular.module('App')
.service('UserService', ['$http', function($http){

  var self = this;
  var usersUrl = '/api/users';
  var userUrl = '/api/users/:id';
  this.users = [];
  this.user = '';

  $http.get(usersUrl)
  .then(function(response) {
    self.users = response.data;
  });

  this.getUsers = function(){
    return users;
  };

  this.getUser = function(id){
    console.log(id);
    for (var i = 0; i < self.users.length; i++) {
      if(self.users[i].id === id){
        return self.users[i];
      }
    }
  };


  // $http.post(url, user)
  // .then(function(response){
  //   console.log('user added to database');
  // });

}]);