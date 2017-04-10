//~~~~friendFactory(client)::::assets/factories/friendFactory.js~~~~\\

appModule.factory('friendFactory', friendFactory);

function friendFactory($http) {
    var friends = [],
        friend = {};

    var factory = {
        index: _index,
        show: _show,
        create: _create,
        update: _update,
        delete: _delete,
        getFriends: _getFriends,
        getFriend: _getFriend
    };

    function _index(callback) {
        $http.get('/friends').then(function(res) {
            friends = res.data;
            if (typeof(callback) === 'function') {
                callback(friends);
            }
        });
    }

    function _show(id, callback) {
        console.log()
        $http.get('/friends/' + id).then(function(res) {
            if (!res.data.error) {
                friend = res.data;
            }
            if (typeof(callback) === 'function') {
                callback(friend);
            }
        });
    }

    function _create(friend, callback) {
        $http.post('/friends', friend).then(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
            }
        });
    }

    function _update(friend, callback) {
        $http.post('/friends/' + friend._id, friend).then(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
            }
        });
    }

    function _delete(id, callback) {
        console.log('factory took in this id:', id)
        $http.delete('/friends/' + id).then(function(res) {
            console.log('factory heard back from api')
            console.log(res)
            if (typeof(callback) === 'function') {
                callback(res);
            }
        });
    }

    function _getFriends(callback) {
        callback(friends);
    }

    function _getFriend(callback) {
        callback(friend);
    }

    return factory;
}
