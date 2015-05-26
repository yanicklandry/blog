/**
 * Created by frank.zhang on 5/5/15.
 */
app.controller('boxCtrl', ['$scope','$interval', function ($scope,$interval) {
    $scope.a=4;
    $scope.b=1;
    $scope.c=2;
    $scope.d=3;

    function change(){
        if($scope.a==4){
            $scope.a=1;
        }else{
            $scope.a++;
        }
        if($scope.b==4){
            $scope.b=1;
        }else{
            $scope.b++;
        }
        if($scope.c==4){
            $scope.c=1;
        }else{
            $scope.c++;
        }
        if($scope.d==4){
            $scope.d=1;
        }else{
            $scope.d++;
        }
        $scope.$digest();
        console.log($scope.a,$scope.b,$scope.c,$scope.d);
    }

    window.timer=setInterval(change,4000);

    $scope.run=function(){
        $scope.pause=!$scope.pause;
        if($scope.pause){
            clearInterval(window.timer);
        }else{
            window.timer=setInterval(change,4000);
        }
    }
}]);