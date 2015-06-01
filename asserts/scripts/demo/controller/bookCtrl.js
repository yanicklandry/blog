/**
 * Created by frank.zhang on 5/5/15.
 */
app.controller('bookCtrl', ['$scope','$timeout', function ($scope,$timeout) {
    $scope.current=1;
    $scope.isTurnLeft=true;
    $scope.isTurnRight=false;

    //$scope.isTurnLeft=false;
    //$scope.isTurnRight=true;

    $scope.isTurn=false;

    $scope.book=[{
        pageNum:1,
        content:'地球之盐'
    },{
        pageNum:2,
        content:'超验骇客'
    },{
        pageNum:3,
        content:'机械姬'
    },{
        pageNum:4,
        content:'狩猎'
    },{
        pageNum:5,
        content:'万物生长'
    },{
        pageNum:6,
        content:'安德的游戏'
    }];



    $scope.turnLeft=function(){
        $scope.isTurnLeft=true;
        $scope.isTurnRight=false;
        $scope.isTurn=true;
        $timeout(function(){
            $scope.current+=2;
            $scope.isTurn=false;
        },1000);
    }

    $scope.turnRight=function(){
        $scope.isTurnLeft=false;
        $scope.isTurnRight=true;
        $scope.isTurn=true;
        $timeout(function(){
            $scope.current-=2;
            $scope.isTurn=false;
        },1000);
    }
}]);
