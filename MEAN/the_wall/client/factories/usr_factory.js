app.factory('userFactory', function($http, $location){
    var factory = {};

    factory.login = function(user) {
        $http.post('/login', user).then(function(output){
            if(output.data) {
                $location.url('/wall')
            }
        });
    }

    factory.checkStatus = function(cb){
        $http.get('/checkstatus').then(function(output){
            if(!output.data){
                $location.url('/')
            } else {
                cb(output.data)
            }
        })
    }

    return factory;
})
