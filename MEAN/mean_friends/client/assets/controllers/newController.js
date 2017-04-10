//~~~~newController(client)::::assets/controllers/newController.js~~~~\\

appModule.controller('newController', newController);

function newController($scope, $routeParams, $location, friendFactory) {
    $scope.create = function() {
        var data = {
            firstName: $scope.newForm.firstName,
            lastName: $scope.newForm.lastName,
            birthday: $scope.newForm.birthday
        };

        friendFactory.create(data, function(res){
            if(res.error) {
                console.log(res.error);
                console.log('error creating friend. Check newController')
            } else {
                $location.path('/');
            }
        });
    };
}
