//~~~~Controller(server)::::js/controllers/friendsController.js~~~~\\

appModule.config(function($routeProvider){
    $routeProvider
        .when("/new", {
            templateUrl: "partials/new.html",
            controller: 'friendsController'
        })
        .when("/edit", {
            templateUrl: "partials/edit.html",
            controller: 'friendsController'
        })
        .when("/show", {
            templateUrl: "partials/show.html",
            controller: 'friendsController'
        })
        .when("/", {
            templateUrl: "partials/friend_list.html",
            controller: 'friendsController'
        })
      .otherwise({
         redirectTo: "/"
      });
})
