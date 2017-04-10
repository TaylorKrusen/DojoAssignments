var app = angular.module('app',['ngRoute', 'ngMessages'])

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'usersController'
    })
    .when('/todo', {
        templateUrl: 'partials/todo.html',
        controller: 'usersController'
    })
    .when('/add', {
        templateUrl: 'partials/add.html',
        controller: 'usersController'
    })
    .otherwise({
        redirectTo: '/'
    })
})
