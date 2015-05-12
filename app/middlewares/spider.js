/**
 * Created by frank.zhang on 5/5/15.
 */
var superagent=require('superagent');
var cheerio=require('cheerio');

var spider={};

spider.getImages=function(callback){
    superagent
    .get('http://www.douban.com/group/teamt/members?start=0')
    .end(function (err, sres) {
        if (err) {
            console.log(err);
        }
        var $ = cheerio.load(sres.text);
        var list = [];
        $('.member-list .pic img').each(function (idx, element) {
           list.push($(element).attr('src'));
        });
        callback(list);
    });
}

module.exports=spider;

