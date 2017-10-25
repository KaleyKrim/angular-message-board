angular.module('App')
.provider('Users', [function(){

  this.userUrl = '';
  this.users = [];

  this.setUrl = function(url){
    this.userUrl = url;
  };

  this.$get = ['$http', function($http){
    var self = this;
    return {
      getUsers: function(){
        return $http.get(self.userUrl)
        .then(function(response) {
          return response.data;
        });
      }
    };
  }];




}]);