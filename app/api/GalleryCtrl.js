/**
 * Created by frank.zhang on 5/5/15.
 */
var spider=require('../middleware/spider');

module.exports=function(app){
    app.get('/api/gallery/douban',function(req,res){
        var callback=function(list){
            res.json(list);
        }
       spider.getImages(callback,req.query.start);
    })
}
