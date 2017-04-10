//~~~~Factory(client)::::js/factories/friendFactory.js~~~~\\

appModule.factory('friendFactory', ['$http', function($http) {
    var factory = {};

    factory.index = function(callback) {
      //call this method if you want to update or set the friends variable
        $http.get('/friends').then(function(returned_data){
            factory.friends = returned_data.data;
            callback(factory.friends);
        });
    }

    factory.show = function(id, callback) {
        console.log('the id in the factory:', id)
        $http.get('/friends/'+id).then(function(returned_data){
            factory.friends = returned_data.data;
            console.log(factory.friends)
        })
    }
    factory.create = function(newfriend, callback) {
        $http.post('/friends', newfriend).then(function(returned_data){
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    }
    factory.update = function(id, callback) {
        $http.put(/*ROUTE*/).then(function(returned_data) {
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        })
    }
    factory.delete = function() {
      // Your code here
    }
    return factory;
}]);
