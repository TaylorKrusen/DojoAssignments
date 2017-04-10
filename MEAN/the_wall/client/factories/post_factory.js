app.factory('postFactory', function($http){
    var factory = {};

    factory.setWall = function(callback){
        $http.get('/dash').then(function(output){
            posts = output.data;
            if (typeof(callback) === 'function') {
                callback(posts);
            };
        })
    }
    factory.setWall();

    factory.add_post = function(post){
        $http.post('/addPost', post)
    }

    factory.add_comment = function(){
        console.log('comment button')
    }

    return factory;
})
