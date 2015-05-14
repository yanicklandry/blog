/**
 * Created by frank.zhang on 5/8/15.
 */
var tungus = require('tungus');
var mongoose = require('mongoose');

//global.TUNGUS_DB_OPTIONS =  { nativeObjectID: true, searchInArray: true };

mongoose.connect('tingodb://'+__dirname+'/data');

var db=mongoose.connection;
//fix tungus bug;
db.config={};
db.config.autoIndex=false;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    require('./model/ArticleModel');
});

exports.mongoose=mongoose;
