import React from "react";
import{useNavigate} from 'react-router-dom'
function AddBook(){
  var navig = useNavigate();
    const [newbook,setNewbook] = React.useState({
    title:'',
    id:'',
    authorname:''
    })
      function addbook(){
        fetch("http://localhost:4000/addbook",{
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(newbook)
        })
        .then(res=>{
          alert("book added successfully")
          navig("/listofbooks")
        })
      }
    return (
        <div>
            <h1>Add Book</h1>
            <input type="text" placeholder="Enter Book Title" name="title"  onChange={(e)=>{setNewbook({...newbook,title:e.target.value})}}/><br/>
            <input type="text" placeholder="id" name="id" onChange={(e)=>{setNewbook({...newbook,id:e.target.value})}}/><br/>
            <input type="text" placeholder="Enter Book Author" name="authorname" onChange={(e)=>{setNewbook({...newbook,authorname:e.target.value})}}/><br/>
            <button onClick={addbook}>Add Book</button>
        </div>
    )
    }


export default AddBook