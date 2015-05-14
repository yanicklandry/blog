/**
 * Created by frank.zhang on 5/13/15.
 */
var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    title: String,
    content:String
});

var ArticleModel=mongoose.model('Article',ArticleSchema);

module.exports=ArticleModel;
