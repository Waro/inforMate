import React from "react";
import { Link } from "react-router-dom";

//coment test dummie changes
export const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
  <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 ">
    <Link to="/">
    <a class="navbar-brand p-3" href="#">InforMATE</a>
    </Link>
  </div>
  <div class="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex flex-row-reverse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item ">
          <Link to="/hotels">          
            <a class="nav-link active" aria-current="page" href="#">Hotels</a>
          </Link>    
        </li>
        <li class="nav-item ">
          <Link to="/restaurants">
            <a class="nav-link active" aria-current="page" href="#">Restaurants</a>
          </Link>
        </li>
        <li class="nav-item ">
          <Link to="/fights">          
            <a class="nav-link active" aria-current="page" href="#">Flights</a>
          </Link>
        </li>
          <button type="button" class=" login btn btn-light mx-3">Login</button>
        </ul>
    </div>
</nav>   
  );
};
