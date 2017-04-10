app.controller('assController', function($scope) {
    console.log('im in the ass controller')
})
app.controller("assController", function($scope, playerFactory, teamFactory){
    $scope.players = [];
    $scope.teams = [];

    // get the player list
    playerFactory.getPlayers(function(players){
        $scope.players = players;
        console.log($scope.players)
    })

    // get the team list
    teamFactory.getTeams(function(teams){
        $scope.teams = teams;
        console.log($scope.teams)
    })


   //Pass the player index and team name to create association
    $scope.addPlayerToTeam = function(){
        console.log($scope.newAss)
        playerFactory.addPlayerToTeam($scope.newAss);
    }

   //Pass $index to PlayerFactory to remove the player's team
    $scope.removePlayerFromTeam = function($index){
        playerFactory.removePlayerFromTeam($index);
    }
})
