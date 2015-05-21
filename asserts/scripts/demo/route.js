/**
 * Created by frank.zhang on 5/15/15.
 */
"use strict";
app.config(['$locationProvider','$stateProvider','$urlRouterProvider', function ($locationProvider,$stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/demo");

    $stateProvider
        .state('home', {
            url: "/demo",
            templateUrl: "views/demo/home.html"
        })
        .state('gallery', {
            url: "/demo/gallery",
            templateUrl: "views/demo/gallery.html"
        })
}]);
