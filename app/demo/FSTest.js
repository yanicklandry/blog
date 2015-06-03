/**
 * Created by frank.zhang on 6/2/15.
 */
var fs=require('fs');
var path=require('path');

console.log(__dirname);

var oldPath=__dirname+'/a.txt';
var newPath=__dirname+'/b.txt';
fs.rename(oldPath,newPath,function(){
   console.log('success!');
});
