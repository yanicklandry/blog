/**
 * Created by frank.zhang on 5/13/15.
 */

var mongoose=require('../DbConfig').mongoose;

var UserSchema = mongoose.Schema({
    name: String,
    password:String
});

var UserModel=mongoose.model('User',UserSchema);

module.exports=UserModel;
