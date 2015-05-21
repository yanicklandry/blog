/**
 * Created by frank.zhang on 5/15/15.
 */
"use strict";
app.config(['$locationProvider','$stateProvider','$urlRouterProvider', function ($locationProvider,$stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/user");

    $stateProvider
        .state('home', {
            url: "/user",
            templateUrl: "views/user/home.html"
        })
}]);
