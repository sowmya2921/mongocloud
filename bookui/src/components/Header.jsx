import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return (
        <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
<ul class="navbar-nav">
<li class="nav-item">
    <Link class="nav-link active" to="/addbook">Add Book</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" to="/listofbooks">List of Books</Link>
  </li>
 
</ul>
</div>
</nav>
    </div>

    )
}

export default Header