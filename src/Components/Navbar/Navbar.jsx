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
            
              <li className="nav-text"><NavLink to="/" className="nav-text-items">Home</NavLink></li>
            
            
              <li className="nav-text">
             <NavLink className="nav-text-items" to="/deoration">
                Decoration
                </NavLink> 
                </li>
            
            
              <li className="nav-text" >
               <NavLink className="nav-text-items" to="/event">  Event</NavLink></li>
            
            
              <li className="nav-text">
                <NavLink className="nav-text-items" to="/gallery">Gallery</NavLink>
              </li>
            
            
              <li className="nav-text">
                <NavLink className="nav-text-items" to="/package">Package</NavLink>
              </li>
          
          </ul>
          <button  className="n-button">
         
            <NavLink to="/listbusiness" className="Nav-btn">List Your Business</NavLink>
          </button>

          <button className="n-button">
           
            <NavLink to="/navcontact" className="Nav-btn" >Contact</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
