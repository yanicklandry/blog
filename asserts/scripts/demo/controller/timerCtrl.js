/**
 * Created by frank.zhang on 5/5/15.
 */
app.controller('timerCtrl', ['$scope','$interval', function ($scope,$interval) {
    $scope.number=10;
    var timer=$interval(function(){
        $scope.number--;
        if($scope.number==0){
            $interval.cancel(timer);
        }
    },1000);
}]);