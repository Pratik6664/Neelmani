import React from "react";
import "./File.css";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { FaToriiGate } from "react-icons/fa6";
const File = () => {
  return (
    <>
      <div className="Plan-container">
        <h2 className="plan-heading">How to host an event with us</h2>
        <p className="plan-sub-heading">
          You don't need to be member to host an event with us just follow these
          simple steps
        </p>
        <div className="Plan-sub-container">
          <div className="sub-container">
            <MdAddIcCall className="planning-icon" />
            <p className="plan-sub-title">Reach out</p>
            <p className="plan-description">
              Get in touch with us with your event needs and team wil help you
              plan it
            </p>
          </div>
          <div className="sub-container">
            <MdOutlineEventNote className="planning-icon" />
            <p className="plan-sub-title">Our Team Preps</p>
            <p className="plan-description">
              From drawing up floor plans to sourcing vendors, procuring AV
              equipment and coordinating with your team we handle the
              preliminaries.
            </p>
          </div>
          <div className="sub-container">
            <FaToriiGate  className="planning-icon" />
            <p className="plan-sub-title">You Host</p>
            <p className="">
              {" "}
              Focus on you event while we take care of the rest.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default File;
