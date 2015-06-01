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
        .state('box', {
            url: "/demo/box",
            templateUrl: "views/demo/box.html"
        })
        .state('timer', {
            url: "/demo/timer",
            templateUrl: "views/demo/timer.html"
        })
        .state('canvas', {
            url: "/demo/canvas",
            templateUrl: "views/demo/canvas.html"
        })
        .state('fan', {
            url: "/demo/fan",
            templateUrl: "views/demo/fan.html"
        })
        .state('paint', {
            url: "/demo/paint",
            templateUrl: "views/demo/paint.html"
        })
        .state('book', {
            url: "/demo/book",
            templateUrl: "views/demo/book.html"
        })
        .state('test', {
            url: "/demo/test",
            templateUrl: "views/demo/test.html"
        })
}]);
