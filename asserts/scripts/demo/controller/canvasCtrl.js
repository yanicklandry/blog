/**
 * Created by frank.zhang on 5/5/15.
 */
app.controller('canvasCtrl', ['$scope','$element', function ($scope,$element) {
    $scope.color='#000000';
    var stage = new createjs.Stage("demoCanvas");

    var isDrawLine=false;

    var g=new createjs.Graphics();

    $scope.$watch('color',function(newValue){
        g.beginStroke($scope.color);
    });
    var shape=new createjs.Shape(g);
    stage.addChild(shape);

    stage.addEventListener('stagemousedown',function(event){
        isDrawLine=!isDrawLine;
        g.moveTo(event.stageX,event.stageY);
    });

    stage.addEventListener('stagemousemove',function(event){
        if(isDrawLine){
            g.lineTo(event.stageX,event.stageY);
            stage.update();
        }
    });

}]);