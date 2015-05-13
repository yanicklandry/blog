/**
 * Created by frank.zhang on 5/5/15.
 */
define(function(require,exports,module){
    var $=require('jquery');
    var _=require('underscore');
    var util=require('./util');
    var animation=require('./animation/animation');

    console.log(animation.fadein());

    var imgList=[];

    $.get('/douban',function(res){
        imgList=res;
        _.each(imgList,function(src){
            var $div=$('<div>');
            $div.addClass('img-wapper');
            $div.css('background-color',util.rndGray());
            $div.append('<img class="background" src="http://img3.douban.com/icon/user_normal.jpg">');

            var $img=$('<img>');
            $img.attr('src',src);
            $img.addClass('front');
            $div.append($img);
            $('body').append($div);

            var progress=0;
            $('img').each(function(){
                $(this).load(function(){
                    $('.loading').css('width',progress+'%');
                    progress=progress+100.0/imgList.length;
                    if(progress>=100){
                        $('.cover').hide();
                        $('.loading').fadeOut('slow');
                    }
                })
            });

            $('.img-wapper').mouseenter(function(){
                $(this).children().each(function(index,ele){
                    $(ele).css('-webkit-animation-name','overturn');
                })
            });
        })
    });
});




