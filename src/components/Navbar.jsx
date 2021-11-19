import React from 'react'
import netflix from './images/netflix.png'
// import { Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (

    

    <nav className="navbar navbar-expand-md navbar-dark  bg-black">
      <div className="container-fluid">
        <NavLink className="navbar-brand " to="/">
          <img src={netflix} alt="" width="170" height="55" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          {/* <ion-icon name="list-outline"></ion-icon> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item p-0 m-0">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/webseries">
                TV Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/movies">
                Movies
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/animated">
                Animated Movies
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/document">
                Documentry
              </NavLink>
            </li>


          </ul>

          <a href="https://www.netflix.com/in/login" target="_blank">
            <button class="btn btn-danger m-1" type="submit">
              JOIN NOW 
            </button></a>

          <a href="https://www.netflix.com/in/login" target="_blank">
            <button class="btn btn-outline-danger text-white" type="submit">
              Sign In  <i class="bi bi-box-arrow-in-right"></i>
            </button></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar

