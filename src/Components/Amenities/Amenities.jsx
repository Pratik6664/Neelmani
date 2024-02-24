import React from "react";
import "./Amenities.css";
import { MdCleaningServices } from "react-icons/md";
import { RiHandSanitizerLine } from "react-icons/ri";
import { BsFan } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { MdSocialDistance } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineLocationCity } from "react-icons/md";
const Amenities = () => {
  return (
    <>
      <div className="Amenities">
        <div className="inner-container">
          <h4>Building Amenities</h4>
          <div className="Amenities-sub-container">
            <div className="Amenities-sub-up">
              <div className="Amenities-sub-up1">
                <MdCleaningServices className="Amenities-icon" />
                <p>Enhance cleaning services</p>
              </div>
              <div className="Amenities-sub-up1">
                <RiHandSanitizerLine className="Amenities-icon" />
                <p>Hand sanitizers</p>
              </div>
              <div className="Amenities-sub-up1">
                <BsFan className="Amenities-icon" />
                <p>Enhanced AC standards</p>
              </div>
              <div className="Amenities-sub-up1">
                <FaWifi className="Amenities-icon" />
                <p>High-speed internet</p>
              </div>
            </div>
            <div className="Amenities-sub-down">
              <div className="Amenities-sub-down1">
                < MdSocialDistance className="Amenities-icon" />
                <p>Professional & social events</p>
              </div>
              <div className="Amenities-sub-down1">
                <GiKnifeFork className="Amenities-icon" />
                <p>Pantry</p>
              </div>
              <div className="Amenities-sub-down1">
                < RiTeamFill className="Amenities-icon" />
                <p>Onsite staff</p>
              </div>
              <div className="Amenities-sub-down1">
                < MdOutlineLocationCity className="Amenities-icon" />
                <p>Event spaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
