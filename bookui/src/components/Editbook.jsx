import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import{useNavigate} from 'react-router-dom'

   
function Editbook(){ 
  var navig = useNavigate();
    var {id}=useParams()
    const [editbooks, seteditbooks] = useState([])
    useEffect(()=>{
      fetch(`http://localhost:4000/editbook/${id}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        seteditbooks(data)
      })
      },[])

     
      function updatebook(){
        fetch(`http://localhost:4000/updatebook/${id}`,{
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(editbooks)
        })
        .then(res=>{
          alert("book edited successfully")
          navig("/listofbooks")
        })
      }

    return (
        <div>
            <h1>Edit Book</h1>
            <input type="text"  name="title"  placeholder="Enter Book Title" onChange={(e)=>{seteditbooks({...editbooks,title:e.target.value})}} value={editbooks.title}/><br/>
            <input type="text"  name="id"  placeholder="id" onChange={(e)=>{seteditbooks({...editbooks,id:e.target.value})}} value={editbooks.id}/><br/>
            <input type="text"  name="authorname"  placeholder="Enter author" onChange={(e)=>{seteditbooks({...editbooks,authorname:e.target.value})}} value={editbooks.authorname}/><br/>
            <button onClick={()=>{updatebook(editbooks.id)}}>Update</button>
        </div>
    )
}
    

export default Editbook
