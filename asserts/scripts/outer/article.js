/**
 * Created by frank.zhang on 5/14/15.
 */
define(function(require,exports,module){
    $('#btn-new').click(function(){
        if($('#content').data('show')){
            $('#content').data('show',false).animate({
                height:0,
                opacity:0
            },800);
        }else{
            $('#content').data('show',true).animate({
                height:300,
                opacity:1
            },800);
        }
    });


    $('#btn-save').click(function(){
        var title=$('#title').val();
        var content=$('#content').val();
        $.post('/article',{
            data:{
                title:title,
                content:content
            }
        }).done(function(res){
            console.log(res);
        })
    });

    $('#content').keyup(function(){
        var content=$(this).val();
        var html=marked(content);
        $('.preview').html(html);
    });
});
