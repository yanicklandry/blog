/**
 * Created by frank.zhang on 5/8/15.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    var UserSchema = mongoose.Schema({
        name: String
    });
    var User = mongoose.model('User', UserSchema);
    var user = new User({ name: 'Frank.Zhang' });
    user.save(function(err,user){
        console.log(user);
    });
});
