/**
 * Created by frank.zhang on 5/5/15.
 */

app.controller('galleryCtrl', ['$scope','$http','$element','$interval', function ($scope,$http,$element,$interval) {
    $scope.userlist=[];
    $scope.current=0;

    $scope.start=0;

    $scope.containerHeight=0;
    $scope.scrollHeight=1000;

    $scope.load=function(){
        $http.get('/api/gallery/douban',
            {
                'params':{
                    'start':$scope.start
                }
            })
            .success(function(data,status,headers,config){
                $scope.userlist=$scope.userlist.concat(data);
                var timer=$interval(function(){
                    if($scope.current<$scope.userlist.length){
                        $scope.current++;
                    }else{
                        $scope.containerHeight=$element.find('.img-container').height();
                        $interval.cancel(timer);
                    }
                },200);
                $scope.start+=35;
            });
    };

    $scope.$watchGroup(['containerHeight','scrollHeight'],function(newValue,oldValue){
        if(newValue[0]<newValue[1]){
            $scope.load();
        }else{
            $element.height(newValue[0]+500);
        }
    });

    $scope.loading=function(src){
        //console.log(src);
    };

    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop()+$(window).height();
        if(scrollTop>$scope.scrollHeight+250){
            $scope.scrollHeight+=500;
            $scope.$digest();
        }
    })
}]);
