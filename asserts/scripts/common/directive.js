/**
 * Created by frank.zhang on 5/15/15.
 */
"use strict";
app.directive('zLoad', ['$parse', function($parse){
    return {
        restrict: 'A',
        compile: function($element, attr) {
            var fn = $parse(attr['ffLoad']);
            return function(scope, element, attr) {
                element.on('load', function(event) {
                    scope.$apply(function() {
                        fn(scope, {$event:event});
                    });
                });
            };
        }
    };
}]);

app.directive('zNumberPicker', ['$parse', function($parse){
    return {
        restrict: 'AE',
        templateUrl:'views/directive/numberPicker.html',
        scope:{
            start:'=',
            end:'='
        },
        link:function(scope,element,attrs){
            console.log(scope.start);
            console.log(scope.end);
        }
    };
}]);

