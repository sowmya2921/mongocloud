var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var cors = require('cors')
app.use(cors())

var BookModel = require("./Book.model")
var ObjectId = require('mongodb').ObjectId
app.use(express.static(__dirname+"/public"))

app.post("/addbook",function(req,res){
    console.log(req.body)
    var newBook = new BookModel(req.body)
    newBook.save().then(doc=>{
        res.send(doc)
    }).catch(err=>console.log(err))
})

app.get("/listofbooks",(req,res)=>{
    BookModel.find({}).then((books)=>{
        res.send(books)
    }).catch((err)=>{console.log(err)})
})
    
//app.get('/editbook/:id',(req,res)=>{
    //        BookModel.findOne({_id:ObjectId(req.params.id)}) 
      //      .then((book)=>{
        //    console.log(book)
          //  res.send(book)
       // })
        //.catch(err=>console.log(err))      
   // })

    app.post("/updateStudent/:id",(req,res)=>{
        console.log(req.body)
            BookModel.updateOne({_id:ObjectId(req.params.id)},{$set:{...req.body}})
            .then((book)=>{
                res.redirect("/listofbooks")
                console.log(book)
            })
            .catch(err=>console.log(err))
        })

app.get('/deletebook/:id',(req,res)=>{
        BookModel.deleteOne({_id:ObjectId(req.params.id)})
        .then((books)=>{
            res.send({message:'book deleted'})
            console.log(books)
        })
        .catch(err=>console.log(err))
    
    })


app.listen(4000,()=>console.log('server is running on 4000'))