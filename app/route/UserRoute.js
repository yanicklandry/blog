/**
 * Created by frank.zhang on 5/5/15.
 */
module.exports=function(app){
    app.get('/user',function(req,res){
        res.render('user');
    });

    app.get('/user/*',function(req,res){
        res.render('user');
    });
}
