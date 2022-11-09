import React from "react";
import { useEffect,useState } from "react";
   
function Editbook(){ 
    const [editbooks, seteditbooks] = useState([])
    useEffect(()=>{
      fetch("http://localhost:4000/editbook/:id")
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        seteditbooks()
      })
      },[])
    return (
        <div>
            <h1>Edit Book</h1>
            <input type="text"  name="title"onChange={(e)=>{seteditbooks({...editbooks,title:e.target.value})}} /><br/>
            <input type="text"  name="id"/><br/>
            <input type="text"  name="authorname"/><br/>
            <button >Update</button>
        </div>
    )
}
    

export default Editbook
