/**
 * Created by frank.zhang on 5/5/15.
 */
module.exports=function(app){
    app.get('/article',function(req,res){
        res.render('article', {title:'Article List'});
    })
}
