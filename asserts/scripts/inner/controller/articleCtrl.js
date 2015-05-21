/**
 * Created by frank.zhang on 5/5/15.
 */
app.controller('articleCtrl', ['$scope', '$http',function ($scope,$http) {
    $scope.title='';
    $scope.content='';
    $scope.save=function(){
        $http.post('/api/user/article',{
            'data':{
                'title':$scope.title,
                'content':$scope.content
            }
        }).success(function(){
            console.log('success');
        })
    }
}]);