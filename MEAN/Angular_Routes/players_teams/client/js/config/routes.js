// connected with index
app.config(function($routeProvider){
    $routeProvider
        .when("/players", {
            templateUrl: "partials/players.html",
            controller: 'playersController'
        })
        .when("/teams", {
            templateUrl: "partials/teams.html",
            controller: 'teamsController'
        })
        .when("/ass", {
           templateUrl: "partials/associations.html",
           controller: 'assController'
        })
      .otherwise({
         redirectTo: "/players"
      });
})
