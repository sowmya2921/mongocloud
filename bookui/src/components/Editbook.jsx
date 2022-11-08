import React from "react";
import { useEffect,useState } from "react";
   
function Editbook(){
    const [editbooks,seteditbooks] = useState([])
    useEffect(()=>{
        geteditbook()
    },[])

    function geteditbook(){
        fetch("http://localhost:4000/listofbooks")
        .then(res=>res.json())
        .then(books=>seteditbooks(books))
        .catch(err=>console.log("err",err))
    }
    function updatebook(id){
        fetch(`http://localhost:4000/updatebook/${id}`)
        .then(res=>res.json())
        .then(data=>{
            geteditbook();
            console.log(data)
        })
        .catch((err)=>{console.log("err::",err)})
    }
    return (
        <div>
            <h1>Edit Book</h1>
            {
                editbooks && editbooks.map((book)=>{
                    return <li>
                       
                        <input type="text"  name="id" value={book.id} onChange={(e)=>{seteditbooks({...editbooks,id:e.target.value})}}/><br/>
                        <input type="text"  name="title" value={book.title} onChange={(e)=>{seteditbooks({...editbooks,title:e.target.value})}}/><br/>
                        <input type="text"  name="authorname" value={book.authorname} onChange={(e)=>{seteditbooks({...editbooks,authorname:e.target.value})}}/><br/>
                        <button onClick={()=>{updatebook(book.id)}}>Update</button>
                        
                        </li>
                })
            }
        </div>
    )
}
    

export default Editbook
