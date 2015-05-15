var express=require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var swig=require('swig');

var app=express();
app.engine('html',swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/pages');

app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use('/bower_components',express.static(__dirname+'/bower_components'));
app.use('/asserts',express.static(__dirname+'/asserts'));
app.use('/',express.static(__dirname+'/pages'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data


require('./app/DbConfig');

require('./app/routes/HomeRoute')(app);
require('./app/routes/GalleryRoute')(app);
require('./app/routes/ArticleRoute')(app);

app.listen(3001,function(){
    console.log('server start at 3001!');
});
