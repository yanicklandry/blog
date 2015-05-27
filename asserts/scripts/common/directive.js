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
            scope.isMove=false;
            scope.left=0;
            scope.move= function () {
                if(scope.isMove){
                    if(scope.left>=0&&scope.left<=200){
                        scope.pageX=event.pageX;
                        scope.left=event.pageX-scope.x;
                        scope.number=Math.round(scope.left/2);
                        console.log(scope.number);
                    }else if(scope.left<0){
                        scope.left=0;
                    }else if(scope.left>200){
                        scope.left=200;
                    }
                }
            };

            scope.down=function(){
                scope.x=event.pageX-scope.left;
                scope.isMove=true;
            }

            $('body').bind('mouseup',function(){
                scope.isMove=false;
                scope.$digest();
            });
        }
    };
}]);

