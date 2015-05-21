/**
 * Created by frank.zhang on 5/5/15.
 */
app.controller('animate_ctrl', ['$scope','$animate','$element','$timeout', function ($scope,$animate,$element,$timeout) {
    console.log(new Date());
    $timeout(function(){
        console.log(new Date());
    },2000);
}]);

//app.animation('.target1', function(){
//    return{
//        enter: function (element,doneFn) {
//            $(element).fadeIn(1000,doneFn);
//        },
//        leave: function (element,doneFn) {
//            $(element).fadeOut(1000,doneFn);
//        }
//    }
//});
