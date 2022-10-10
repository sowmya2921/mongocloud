var express = require('express')
var router = express.Router()
var CourseModel = require("./course.model")
router.post("/addCourse",function(req,res){
    console.log(req.body)
    var newCourse = new CourseModel(req.body)
    newCourse.save().then(res=>console.log(res)).catch(err=>console.log(err))
})

router.get("/allCourses",function(req,res){
    CourseModel.find({}).then(courses=>res.send(courses)).catch(err=>console.log(err))
})
module.exports=router