const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/kh2"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: String,
    password:String,
    level:Number
    });
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel