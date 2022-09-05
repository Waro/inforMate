import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "/workspace/inforMate/src/front/js/component/Modal.js";

//coment test dummie changes
export const Navbar = () => {
  const [modalOpen, setModalOpen] = useState (false);
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
  <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 ">
    <Link to="/">
    <a className="navbar-brand p-3" href="#">InforMATE</a>
    </Link>
  </div>
  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex flex-row-reverse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <Link to="/hotels">          
            <a class="nav-link active" aria-current="page" href="#">Hotels</a>
          </Link>    
        </li>
        <li className="nav-item ">
          <Link to="/restaurants">
            <a className="nav-link active" aria-current="page" href="#">Restaurants</a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link to="/fights">          
            <a className="nav-link active" aria-current="page" href="#">Flights</a>
          </Link>
        </li>
          <div className="App">
          <button className="openModalBtn btn btn-light mx-3 login"onClick={() => {setModalOpen(true);}}> Login </button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
        </ul>
    </div>
</nav>   
  );
};
