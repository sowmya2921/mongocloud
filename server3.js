const { application } = require('express')
var express = require('express')
var app = express()
app.set('view engine', 'pug');
app.set('views','./views');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/",function(req,res){
    res.sendFile(__dirname+"/mypage.html")
})
var MongoClient = require('mongodb').MongoClient
var url = "mongodb+srv://sowmyadeepu:qwe123@cluster0.csywfg0.mongodb.net/?retryWrites=true&w=majority"
MongoClient.connect(url, (err, client) => {
  if (err) throw err
 var db = client.db('kh2')
 db.collection('students').find().toArray((err, result) => {
    if (err) throw err
    console.log(result)
  })
})

//MongoClient.connect(url,(err,client) => {
 //   if(err) throw err
   // var db = client.db('kh2')
    //db.collection('students').insertOne({"firstname":"deepu","lastname":"naik","gender":"male"},function(err,result){
      //  if(err) throw err
        //else{
          //  console.log(result)
 //       }
  //  })
//})

app.get("/addstudent",function(req,res){
    res.sendFile(__dirname+"/addstudent.html")
})

app.post("/addstudent",function(req,res){
    console.log(req.body)
    MongoClient.connect(url,(err,client) => {
        if(err) throw err
        var db = client.db('kh2')
        db.collection('students').insertOne(req.body)
        .then((data)=>res.send(data))
        .catch(err=>console.log(err))
        })  
})

app.get("/liststudents",function(req,res){
    MongoClient.connect(url,(err,client)=>{
        if(err) throw err
        var db = client.db('kh2')
        db.collection('students').find().toArray()
        .then((data)=>{
            res.render('studentsList',{students:data})
        })
    })
})

app.get("/student/:sfirstname",function(req,res){
    MongoClient.connect(url,(err,client)=>{
        if(err) throw err
        var db = client.db('kh2')
        db.collection('students').find({firstname:req.params.sfirstname}).toArray()
        .then((data)=>{
            res.render('student',{student:data[0]})
        })
    })
})

app.listen(4500,()=>console.log('server is running on 4500'))