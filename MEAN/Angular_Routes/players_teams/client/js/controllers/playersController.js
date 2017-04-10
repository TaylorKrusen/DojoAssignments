app.controller('playersController', function($scope, playerFactory) {
    function setPlayers(){
        $scope.players = playerFactory.players
    }
    setPlayers();

    $scope.add_player = function(){
        playerFactory.add_player($scope.newPlayer, setPlayers);
        $scope.newPlayer = {};
    }

    $scope.delete_player = function(index){
        playerFactory.delete_player(index, setPlayers);
    }
})
