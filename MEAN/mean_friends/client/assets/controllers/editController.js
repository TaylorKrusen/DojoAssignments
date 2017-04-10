//~~~~editController(client)::::assets/controllers/editController.js~~~~\\

appModule.controller('editController', editController);

function editController($scope, $routeParams, $location, friendFactory) {
    $scope.id = $routeParams.id;

    var cb = function() {
        $scope.editForm = $scope.friend;
    };

    var friend = friendFactory.getFriend(function(friend) {
        $scope.friend = friend;
        if (friend._id !== $scope.id) {
            friendFactory.show($scope.id, function(res) {
                $scope.friend = res;
                cb();
            });
        } else {
            cb();
        }
    });

    $scope.update = function() {
        var data = {
            _id: $scope.id,
            firstName: $scope.editForm.firstName,
            lastName: $scope.editForm.lastName,
            birthday: $scope.editForm.birthday
        };

        friendFactory.update(data, function(res) {
            if(res.error) {
                console.log(res.error);
                console.log('friend not updated. error in edit controller');
            } else {
                $location.path('/');
            }
        });
    };
}
