import React from "react";
import { NavLink } from "react-router-dom";
function Navbar()
{
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Service</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Pages</NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to="/pricing">Pricing Plan</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/barbers">Our Barbers</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/workinghours">Working Hours</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/testimonial">Testimonial</NavLink></li>
                           
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    );
}
export default Navbar;