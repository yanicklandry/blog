/**
 * Created by frank.zhang on 5/21/15.
 */
app.filter('markdown',['$sce',function($sce){
    return function(input){
        var output=marked(input);
        output=$sce.trustAsHtml(output);
        return output;
    }
}]);