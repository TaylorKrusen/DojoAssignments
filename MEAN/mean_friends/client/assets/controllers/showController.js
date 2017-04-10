//~~~~showController(client)::::assets/controllers/showController.js~~~~\\

appModule.controller('showController', showController);

function showController($scope, $routeParams, $location, friendFactory) {
    $scope.id = $routeParams.id;

    var cb = function() {
        $scope.form = $scope.friend;
    };

    var friend = friendFactory.getFriend(function(friend) {
        $scope.friend = friend;
        if(friend._id !== $scope.id) {
            friendFactory.show($scope.id, function(res) {
                $scope.friend = res;
                cb();
            });
        } else {
            cb();
        }
    });
}
