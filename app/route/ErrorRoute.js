/**
 * Created by frank.zhang on 5/5/15.
 */
module.exports=function(app){
    app.get('/404',function(req,res){
        res.render('404');
    });
}
