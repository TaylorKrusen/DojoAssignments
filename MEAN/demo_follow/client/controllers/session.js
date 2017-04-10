app.controller('sessionController', function($scope, sessionFactory){
    $scope.errors = []
    $scope.curUser = null;

    sessionFactory.getUser(function(data){
        $scope.curUser=data;
    })

    $scope.login = function(){
        $scope.errors =[];
        if(!$scope.logReg || !$scope.logReg.name) {
            $scope.errors.push('please enter yo name')
        } else if ($scope.logReg.name.length <3) {
            $scope.errors.push('yo shit is too short')
        } else {
            sessionFactory.login($scope.logReg)
        }
    }

})
