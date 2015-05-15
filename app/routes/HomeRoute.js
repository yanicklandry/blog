/**
 * Created by frank.zhang on 5/5/15.
 */
var spider=require('../middlewares/spider');

module.exports=function(app){
    app.get('/',function(req,res){
        res.render('home',{
            'title':'home_test'
        });
    })
};
