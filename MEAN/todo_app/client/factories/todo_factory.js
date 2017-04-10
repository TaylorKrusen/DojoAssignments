app.factory('taskFactory', function($http){
    var factory = {};

    factory.index = function(callback){
        $http.get('/index').then(function(output){
            tasks = output.data;
            callback(tasks);
        })
    }

    factory.create = function(task){
        $http.post('/create', task);
    }

    return factory;
})
