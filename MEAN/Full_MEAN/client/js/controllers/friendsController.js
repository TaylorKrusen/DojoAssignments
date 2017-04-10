//~~~~Controller(client)::::js/controllers/friendsController.js~~~~\\

// injecting $scope, friendFactory, $location
appModule.controller('friendsController', function($scope, friendFactory, $location) {
    /**
     * This variable is a callback to 'refresh' our list of friends
     *
     * @param
     * @returns
     */
    var setFriends = function(){
        friendFactory.index(function(returnedData){
            $scope.friends = returnedData;
        });
    };
    setFriends();
    /**
     * RETRIEVE specific friend object
     *
     * @param friend's object ID sent to factory
     * @returns matching friend object
     */
    $scope.show = function(id) {
        friendFactory.show(id);
        $location.url('/show');
    }
    /**
     * CREATE new friend and reset model object
     *
     * @param newFriend model from html form sent to Factory
     * @returns nothing yet
     */
    $scope.add_friend = function() {
        friendFactory.create($scope.newFriend, setFriends);
        $scope.newFriend = {};
    }

    $scope.update_friend = function() {

    }
})
