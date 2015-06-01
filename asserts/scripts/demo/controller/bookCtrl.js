/**
 * Created by frank.zhang on 5/5/15.
 */
app.controller('bookCtrl', ['$scope','$timeout', function ($scope,$timeout) {
    $scope.current=0;
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
        if($scope.current<=($scope.book.length-4)){
            $scope.isTurnLeft=true;
            $scope.isTurnRight=false;
            $timeout(function(){
                $scope.isTurn=true;
            },100);
            $timeout(function(){
                $scope.current+=2;
                $scope.isTurn=false;
            },1100);
        }
    }

    $scope.turnRight=function(){
        if($scope.current>=0){
            $scope.isTurnLeft=false;
            $scope.isTurnRight=true;
            $timeout(function(){
                $scope.isTurn=true;
            },100);
            $timeout(function(){
                $scope.current-=2;
                $scope.isTurn=false;
            },1100);
        }
    }

    $scope.backClick=function(){
        if($scope.current<=($scope.book.length-4)){
            $scope.isTurnLeft=true;
            $scope.isTurnRight=false;
            $scope.current+=2;
            $timeout(function(){
                $scope.isTurn=true;
            },100);
            $timeout(function(){
                $scope.current+=2;
                $scope.isTurn=false;
            },1100);
        }
    }

    $scope.coverClick=function(){
        if($scope.current>=0) {
            $scope.isTurnLeft = false;
            $scope.isTurnRight = true;
            $scope.current -= 2;
            $timeout(function () {
                $scope.isTurn = true;
            }, 100);
            $timeout(function () {
                $scope.current -= 2;
                $scope.isTurn = false;
            }, 1100);
        }
    }
}]);
