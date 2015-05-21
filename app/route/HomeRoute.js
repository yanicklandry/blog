/**
 * Created by frank.zhang on 5/5/15.
 */
module.exports=function(app){
    app.get('/',function(req,res){
        res.render('home');
    });
}
