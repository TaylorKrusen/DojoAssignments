var appModule = angular.module('friendApp', ['ngRoute']);

appModule.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "partials/friend_list.html",
            controller: 'indexController'
        })
        .when("/new", {
            templateUrl: "partials/new.html",
            controller: 'newController'
        })
        .when("/edit/:id", {
            templateUrl: "partials/edit.html",
            controller: 'editController'
        })
        .when("/show/:id", {
            templateUrl: "partials/show.html",
            controller: 'showController'
        })
        .otherwise({
            redirectTo: "/"
        });
})
