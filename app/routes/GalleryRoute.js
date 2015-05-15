/**
 * Created by frank.zhang on 5/5/15.
 */
var spider=require('../middlewares/spider');

module.exports=function(app){
    app.get('/gallery',function(req,res){
        res.render('gallery');
    })

    app.get('/gallery/douban',function(req,res){
        var callback=function(list){
            res.json(list);
        }
       spider.getImages(callback);
    })
}
