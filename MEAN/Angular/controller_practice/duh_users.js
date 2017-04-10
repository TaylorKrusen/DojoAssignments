var app = angular.module('userApp', []);

app.controller('usersController', ['$scope', function($scope){
    $scope.users = [{
            firstName:'Jace',
            lastName:'Evee',
            favLanguage:'Korean'
        },
        {
            firstName:'Ian',
            lastName:'ActuallyOwen',
            favLanguage:'English'
        },
        {
            firstName:'Annabelle',
            lastName:'Krusen',
            favLanguage:'Babyish'
        }];
    $scope.add_user = function(){
        console.log($scope.user);
        $scope.users.push($scope.user);
        $scope.user={};
        console.log('users')
    }
    $scope.delete_user = function(userToDelete){
      $scope.users = $scope.users.filter( function(user){
        return user !== userToDelete;
      })
    }
}])
