console.log('playerFactory loaded')
app.factory('playerFactory', function(){

    var factory = {};
    factory.players =[
        {name:'Jacebacon'},
        {name:'Ianbacon'},
        {name:'Taylorbacon'},
    ];

    // pass players to controller
    factory.getPlayers = function(callback){
        callback(factory.players);
    }

    factory.add_player = function(data, callback){
        factory.players.push(data)
        callback();
    }

    factory.delete_player = function(index, callback){
        factory.players.splice(index,1);
        callback();
    }
    //Set a player's team name, specifying player by index
    factory.addPlayerToTeam = function(newAss){
        console.log(newAss)
       console.log(factory.players[newAss.playerIndex])
       factory.players[newAss.playerIndex].team = newAss.team;
       console.log(factory.players[newAss.playerIndex])
    }

    //Reset a player's team name to an empty string
    factory.removePlayerFromTeam = function($index){
       factory.players[$index].team = "";
    }
    return factory;
})
