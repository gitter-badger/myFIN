var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema ({
   name: {
       type: String,
       required: true
   },

   username: {
       type: String,
       required: true
   },

   password: {
       type: String,
       required: true
   },

   lastAccess: {
        type: Date
   }
});

var UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

