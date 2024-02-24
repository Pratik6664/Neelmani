import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div class="Footer">
        <div className="upside-footer">
          <div className="footer-logo">
            <img alt="img" className="logo-1" src="logo.png"></img>
          </div>
          <div className="footer-socialmedia">
            <button>
              <img alt="img"
                className="footer-socialmedia-icon"
                src="instaicon.png"
              ></img>
            </button>
            <button>
              <img alt="img"
                className="footer-socialmedia-icon"
                src="tweeticon.png"
              ></img>
            </button>
            <button>
              <img alt="img"
                className="footer-socialmedia-icon"
                src="facebookicon.png"
              ></img>
            </button>
            <button>
              <img alt="img"
                className="footer-socialmedia-icon"
                src="whatsappicon.png"
              ></img>
            </button>
          </div>
        </div>
        <div className="upside-footer-endline"></div>
        <div className="midside-footer">
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Company</li>
              <li>
                <a href="link">Home</a>
              </li>
              <li>
                <a href="link">Contact us</a>
              </li>
              <li>
                <a href="link">About us</a>
              </li>
              <li>
                <a href="link">Get started</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Services</li>
              <li>
                <a href="link">Building Amenities</a>
              </li>
              <li>
                <a href="link">24/7 Water Supply</a>
              </li>
              <li>
                <a href="link">Changing Rooms</a>
              </li>
              <li>
                <a href="link">Vendors & Venue</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Prime-Events</li>
              <li>
                <a href="link">Weddign</a>
              </li>
              <li>
                <a href="link">Engagement</a>
              </li>
              <li>
                <a href="link">Reception</a>
              </li>
              <li>
                <a href="link">Birthday</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">List-Your-Bussiness</li>
              <li>
                <a href="link">Event Management</a>
              </li>
              <li>
                <a href="link">Decorations</a>
              </li>
              <li>
                <a href="link">Photography</a>
              </li>
              <li>
                <a href="link">Catering</a>
              </li>
            </ul>
            <ul class="box input-box">
              <li class="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="downside-footer">
          <div class="bottom-details">
            <div class="bottom_text">
              <span class="copyright_text">
                Copyright © 2021 <a href="Link">Neelmani</a>All rights reserved
              </span>
              <span class="policy_terms">
                <a href="link">Privacy policy</a>
                <a href="link">Terms & condition</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
