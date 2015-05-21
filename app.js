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
app.use('/views',express.static(__dirname+'/views'));
app.use('/',express.static(__dirname+'/pages'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data


require('./app/DbConfig');

require('./app/route/HomeRoute')(app);
require('./app/route/ArticleRoute')(app);
require('./app/route/DemoRoute')(app);
require('./app/route/UserRoute')(app);
require('./app/route/ErrorRoute')(app);

require('./app/api/GalleryCtrl')(app);

app.use(function(req, res, next){
    res.render('404', { url: req.url });
    return;
});

app.listen(3001,function(){
    console.log('server start at 3001!');
});
