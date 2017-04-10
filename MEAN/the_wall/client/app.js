var app = angular.module('wallApp', ['ngRoute','ngMessages']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/login.html",
        controller: 'usersController'
    })
    .when("/wall", {
        templateUrl: "partials/wall.html",
        controller: 'usersController'
    })
    // .when("/new", {
    //     templateUrl: "partials/new.html",
    //     controller: 'newController'
    // })
    // .when("/edit/:id", {
    //     templateUrl: "partials/edit.html",
    //     controller: 'editController'
    // })
    // .when("/show/:id", {
    //     templateUrl: "partials/show.html",
    //     controller: 'showController'
    // })
    .otherwise({
        redirectTo: "/"
    });
})
