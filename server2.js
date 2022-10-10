const mongoose = require('mongoose');
var url = "mongodb+srv://sowmyadeepu:qwe123@cluster0.csywfg0.mongodb.net/kh2?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstname: String,
    lastname: String,
    gender: String
});
const StudentModel = mongoose.model("Student", StudentSchema);
StudentModel.find({}).then(data=>console.log(data)).catch(err=>console.log(err))

const EmployeeSchema = new Schema({
    firstname: String,
    lastname: String,
    dob:Date,
    place:String
});
const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
var newEmployee = new EmployeeModel({firstname:'shankar',lastname:'naik',dob:'1975-5-23',place:'banglore'})
newEmployee.save().then(res=>console.log(res)).catch(err=>console.log(err))