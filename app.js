var express=require('express');
var swig=require('swig');

var app=express();
app.engine('html',swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/pages');


app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use('/asserts',express.static(__dirname+'/asserts'));
app.use('/',express.static(__dirname+'/pages'));

require('./app/routes/gallery')(app);
require('./app/routes/article')(app);

app.listen(3000,function(){
    console.log('server start at 3000!');
});
