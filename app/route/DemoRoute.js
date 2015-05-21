/**
 * Created by frank.zhang on 5/5/15.
 */
module.exports=function(app){
    app.get('/demo',function(req,res){
        res.render('demo');
    });

    app.get('/demo/*',function(req,res){
        res.render('demo');
    });
}
