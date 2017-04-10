app.controller('teamsController', function($scope, teamFactory) {
    function setTeams(){
        $scope.teams = teamFactory.teams
    }
    setTeams();

    $scope.add_team = function(){
        teamFactory.add_team($scope.newTeam, setTeams);
        $scope.newTeam = {};
    }

    $scope.delete_team = function(index){
        teamFactory.delete_team(index, setTeams);
    }
})
