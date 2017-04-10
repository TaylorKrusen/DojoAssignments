app.controller('usersController', function($scope, userFactory, $location){

    userFactory.checkStatus(function(data){
        $scope.activeUser = data;
        // $location.url('/todo')
    })

    $scope.login = function(){
        userFactory.login($scope.user)
        $scope.user = {}
    }

})
