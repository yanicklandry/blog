var express=require('express');
var app=express();

app.use('/asserts',express.static(__dirname+'/asserts'));
app.use('/',express.static(__dirname+'/pages'));

require('./app/routes/gallery')(app);

app.listen(3000,function(){
    console.log('server start at 3000!');
});
