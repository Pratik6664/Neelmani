import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">
            <img alt="logo2" className="logo" src="logo.png"></img>
          </div>
        </div>
        <div className="n-right">
          <ul style={{ listStyleType: "none" }}>
            
              <li className="nav-text">Home</li>
            
            
              <li className="nav-text">
             <NavLink to="/deoration">
                Decoration
                </NavLink> 
                </li>
            
            
              <li className="nav-text">Event</li>
            
            
              <li className="nav-text">Gallery</li>
            
            
              <li className="nav-text">Package</li>
          
          </ul>
          <button  className="n-button">
            <a href="Link"  className="Nav-btn" target="blank">
              List Your Bussiness
            </a>
          </button>

          <button className="n-button">
            <a href="Link" className="Nav-btn" target="blank">
              {" "}
              Contact
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
