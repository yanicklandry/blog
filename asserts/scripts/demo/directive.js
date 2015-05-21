/**
 * Created by frank.zhang on 5/15/15.
 */
"use strict";
app.directive('ffLoad', ['$parse', function($parse){
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
