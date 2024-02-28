import React from "react";
import "./Navcontact.css";
import Navbar from "../Navbar/Navbar";
import { CgProfile } from "react-icons/cg";
const Navcontact = () => {
  return (
    <>
      <Navbar />

      <div className="Navcontact-container">
        <div className="Navcontact-container-left">
          <div className="Navcontact-left-content">
            <h1 className="navcontact-heading-left">Let's Chat</h1>
            <p className="navcontact-p-left">
              Whether you have a question, want to start a project or simply
              want to connect.
            </p>
            <br />
            <p className="navcontact-p-left">
              Feel free to send me a message in the contact form
            </p>
          </div>
        </div>
        <div className="Navcontact-container-right">
         
            <form className="Navcontact-right-content-form" action="#">
              <h1 className="Navcontact-title">Get in Touch</h1>
              <div className="Contact-input">
                <label>Name</label>
                <input required
                  className="Contact-name-input"
                  placeholder="Name" 
                ></input>
              </div>
              <div className="Contact-input">
                <label>Email</label>
                <input required 
                  className="Contact-email-input"
                  placeholder="Email"
                ></input>
              </div>
              <div className="Contact-input">
                <label>Phone</label>
                <input required 
                  className="Contact-phone-input"
                  placeholder="Phone"
                ></input>
              </div>
              <div className="Contact-input">
                <label>Massage</label>
                <textarea 
                  className="Contact-massage-input"
                  placeholder="Massage"
                ></textarea>
                 <button className="Contact-button">Send</button>
              </div>
            </form>
       
        </div>
      </div>
    </>
  );
};

export default Navcontact;
