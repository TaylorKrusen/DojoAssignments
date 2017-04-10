console.log('teamfactory is loaded')
app.factory('teamFactory', function(){

    var factory = {};
    factory.teams =[
        {name:'BaconBits'},
        {name:'Sasquatches'},
        {name:'Seattle Hipsters'},
    ];

// pass teams to controller
    factory.getTeams = function(callback){
        callback(factory.teams);
    }

    factory.add_team = function(data, callback){
        factory.teams.push(data)
        callback();
    }

    factory.delete_team = function(index, callback){
        factory.teams.splice(index,1);
        callback();
    }

    return factory;
})
