console.log("potato")

var app = angular.module("myApp", ["ngRoute"]);

//Define routes
app.config(function($routeProvider){
   $routeProvider
      .when("/users", {
         templateUrl: "partials/customizeUsers.html",
         controller: 'CustomizeUsersController'
      })
      .when("/list", {
         templateUrl: "partials/userList.html",
         controller: 'UserListsController'
      })
      .otherwise({
         redirectTo: "/users"
      });
})

app.factory("userFactory",[function(){
   var factory = {};

   //Initialize our list of users
   var users = [
      {firstName: "Jace", lastName: "Bacon", language: "Korean"},
      {firstName: "Ian", lastName: "Owen", language: "Potato"},
      {firstName: "Evee", lastName: "Pokemon", language: "Bark"}
   ];


   //Pass the user list to a controller
   factory.index = function(callback){
      callback(users);
   }

   //Add new user to the list
   factory.create = function(user){
      users.push(user);
   }

   //Remove the user from the list
   factory.delete = function($index){
      users.splice($index, 1);
   }
   return factory;
}])

//Inject userFactory into each controller
app.controller("CustomizeUsersController", ['$scope', 'userFactory','$location', function($scope, userFactory, $location){
   function setUsers(data){
      $scope.users = data;
      $scope.newUser = {};
   }

   $scope.users = [];

   //When this controller is loaded, fetch the user list
   userFactory.index(setUsers);

   //Pass new user info to the factory
   $scope.create = function(){
      console.log($scope.newUser)
      userFactory.create($scope.newUser)
      $scope.newUser = {}; //Reset our form
      $location.url('/list');
   }

   //Delegate deleting user to the factory
   $scope.delete = function($index){
      userFactory.delete($index);
   }
}])

//Inject userFactory into each controller
app.controller("UserListsController",['$scope', 'userFactory', function($scope, userFactory){
   function setUsers(data){
      $scope.users = data;
   }

   $scope.users = [];

   //When this controller is loaded, fetch the user list
   userFactory.index(setUsers);
}])
