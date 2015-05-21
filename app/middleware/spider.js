/**
 * Created by frank.zhang on 5/5/15.
 */
var request=require('request');
var cheerio=require('cheerio');

var spider={};

spider.getImages=function(callback,start){
    var url='http://www.douban.com/group/117546/members?start='+start;
    var jar = request.jar();
    var cookie = request.cookie("bid=JQNuKFwxIEc");
    jar.setCookie(cookie,url);
    var list = [];
    request(
        {
            url: url,
            jar: jar,
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(body);
                $('.member-list').last().find('li').each(function (index, element) {
                    var src=$(element).find('img').attr('src');
                    var link=$(element).find('.name a').attr('href');
                    var name=$(element).find('.name a').text();
                    var district=$(element).find('.pl').text();
                    list.push({
                        id:index,
                        src:src,
                        link:link,
                        name:name,
                        district:district
                    });
                });
            }else{
                for(var i=0;i<35;i++){
                    list.push(
                        {
                            'id':i,
                            'src':'http://img3.douban.com/icon/user_normal.jpg'
                        }
                    )
                }
            }
            callback(list);
        }
    );
}

module.exports=spider;

