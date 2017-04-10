//~~~~indexController(client)::::assets/controllers/indexController.js~~~~\\

appModule.controller('indexController', indexController);

function indexController($scope, $route, $routeParams, friendFactory) {
    $scope.friends = [];

    var setFriends = function() {
        friendFactory.index(function(data) {
            $scope.friends = data;
        })
    }
    setFriends();

    $scope.deleteFriend = function(id) {
        friendFactory.delete(id, function(response) {
            if (response.error) {
                console.log(error);
                console.log('delete had an error!')
            } else {
                setFriends();
            }
        })
    };
}
