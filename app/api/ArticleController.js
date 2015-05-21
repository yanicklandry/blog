/**
 * Created by frank.zhang on 5/5/15.
 */
var ArticleModel=require('../model/ArticleModel');

module.exports=function(app){
    app.post('/api/user/article',function(req,res){
        var article=new ArticleModel(req.body.data);
        article.save();
    })
}