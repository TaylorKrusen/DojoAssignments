app.controller('usersController', function($scope, $location, userFactory){

    userFactory.checkStatus(function(data){
        $scope.activeUser = data;
        // $location.url('/todo')
    })

    $scope.login = function(){
        userFactory.login($scope.user)
        $scope.user = {}
    }



})
