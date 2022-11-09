import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";


function ListofBooks() {
    const [books, setbooks] = useState([])
    useEffect(()=>{
      getallbooks()
    },[])
    
    function deletebook(id){
      fetch("http://localhost:4000/deletebook/"+id)
      .then(res=>res.json())
      .then(data=>{
        alert("Book deleted")
        console.log(data)
        getallbooks()
      })
    }
    function getallbooks(){
      fetch("http://localhost:4000/listofbooks")
      .then(res=>res.json())
      .then(books=>{
        console.log(books)
        setbooks([...books])
      })
    }
    return(
        <div>
            <h1>List of Books</h1>
            <table class="table">
               <thead>
                 <tr>
                   <th scope="col">Sno</th>
                   <th scope="col">Title</th>
                   <th scope="col">Author</th>
                   <th scope="col" rowSpan={2}>Operations</th>
                 </tr>
                 </thead>
                {
                books && books.map((book)=>{
                    return (
                <>
                   <tbody>
                  <tr>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.authorname}</td>
                      <td>
                        <Link class="nav-link active" to="/editbook"><button>Edit</button></Link>
                      </td>
                      <td><button onClick={()=>{deletebook(book['_id'])}}>Delete</button></td>
                    </tr>
                   </tbody> 
               </>
                )
                })
                }
            </table>
        </div>
    )
}

    
export default ListofBooks

