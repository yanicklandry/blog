/**
 * Created by frank.zhang on 5/5/15.
 */
var ArticleModel=require('../model/ArticleModel');

module.exports=function(app){
    app.get('/article',function(req,res){
        res.render('article/list', {title:'Article List'});
    });

    app.post('/article',function(req,res){
        var article=new ArticleModel(req.data);
        article.save();
    })
}
