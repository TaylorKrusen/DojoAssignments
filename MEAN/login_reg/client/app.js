var app=angular.module('loginApp',['ngRoute', 'ngMessages']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'partials/logreg.html'
    })
    .when('/dash', {
        templateUrl:'partials/dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})
