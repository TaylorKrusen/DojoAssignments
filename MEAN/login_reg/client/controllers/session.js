// 1. login 2. logout 3. check user

app.controller('sessionController', function($scope, sessionFactory){

    sessionFactory.checkStatus(function(data){
        $scope.curUser = data;
    })

    $scope.login = function(){
        sessionFactory.login($scope.user)
    }
})
