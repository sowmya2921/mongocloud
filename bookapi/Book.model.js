const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/kh2"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    id:Number,
    authorname:String
});
const BookModel = mongoose.model("Book", BookSchema);
module.exports = BookModel
