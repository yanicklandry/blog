/**
 * Created by frank.zhang on 5/7/15.
 */
"use strict";
//app.template用于html2js
var app=angular.module("app",['ui.router','ui.bootstrap','app.template']);

app.run(['$rootScope',function($rootScope){
    $rootScope.global={
        title:'Demo',
        currentPath:'/'
    }
    $rootScope.$on('$stateChangeSuccess',function(event,args){
        console.log(args);
    })
}]);
