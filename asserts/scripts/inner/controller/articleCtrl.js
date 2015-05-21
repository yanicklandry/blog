/**
 * Created by frank.zhang on 5/5/15.
 */
app.controller('articleCtrl', ['$scope','$rootScope', '$http',function ($scope,$rootScope,$http) {
    $scope.title='';
    $scope.content='';
    $scope.save=function(){
        $http.post('/api/user/article',{
            'data':{
                'title':$scope.title,
                'content':$scope.content
            }
        }).success(function(data,status,headers,config){
            $rootScope.global.isRtn=true;
            $rootScope.global.isSuccess=true;
            $rootScope.global.message=data.msg;
        })
    }
}]);