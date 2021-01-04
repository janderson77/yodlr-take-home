import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <NavLink to="/" className="navbar-brand">Yodler</NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/admin"className="nav-link" >Admin</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/register"className="nav-link" >Register</NavLink>
            </li>
            </ul>
        </div>
        </div>
  </nav>)
}

export default NavBar