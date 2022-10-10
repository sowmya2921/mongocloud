const mongoose = require('mongoose');
var url = "mongodb+srv://sowmyadeepu:qwe123@cluster0.csywfg0.mongodb.net/kh2?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    coursename: String,
    coursecost: Number,
    startdate:Date,
    trainer:String
});
const CourseModel = mongoose.model("Course", CourseSchema);
module.exports = CourseModel