import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import coupleemoji from "./coupleemoji.png";
import ring from "./ring.png";
import reception from "./reception.png";
import cake from "./cake.png";
import banquet from "./banquet.png";
import catering from "./catering.png";
import conference from "./conference.webp";
import Wave from "../Wave/Wave";
import Card from "../Card/Card";
import browse from "./browse.jpg";
import quotes from "./quotes.png";
import calendar from "./calendar.png";
import Photographer from "./Photographer.jpg";
import VendorCards from "../VendorCards/CardsV";
import decorationv from "./decorationv.jpg";
import eventplan from "./eventplan.jpg";
import caters from "./caters.jpg";
import makeup from "./makeup.jpg";
import mehandi from "./mehandi.jpg";
import cakev from "./cakev.jpg";
import dj from "./dj.jpg";
import Lawns from "./Lawns.jpg";
import achall from "./achall.jpg";
import opeandining from "./opeandining.jpg";
import openhall from "./openhall.png";
import Planning from '../Planning/File'
import Amenities from "../Amenities/Amenities";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="heading-home"> </div>
        <h1 className="title-home">Weddings With Nilmani</h1>
        <p className="discription-home">
          Welcome to Nilmani Wedding Hall, your premier wedding venue located in
          Baramati. With over 15 years of dedicated experience in the wedding
          industry, we understand that the beauty of weddings lies in
          simplicity, ease, and affordability. At Nilmani, we strive to make
          your special day memorable without the stress and complications.
        </p>

        <Wave />
        <div className="mid-home">
          <div className="zoom-emoji">
            <img alt="img" className="mid-home-emoji" src={coupleemoji}></img>
            <p>Wedding</p>
          </div>
          <div className="zoom-emoji">
            <img alt="img" className="mid-home-emoji" src={ring}></img>
            <p>Ring</p>
          </div>
          <div className="zoom-emoji">
            <img alt="img" className="mid-home-emoji" src={reception}></img>
            <p>Reception</p>
          </div>
          <div className="zoom-emoji">
            <img alt="img" className="mid-home-emoji" src={cake}></img>
            <p>Birthday</p>
          </div>

          <div className="zoom-emoji">
            <img alt="img" className="mid-home-emoji" src={banquet}></img>
            <p>Banquet</p>
          </div>
          <div className="zoom-emoji">
            <img alt="img" className="mid-home-emoji" src={catering}></img>
            <p>Catering</p>
          </div>
          <div className="zoom-emoji">
            <img alt="img" className="mid-home-emoji" src={conference}></img>
            <p>Catering</p>
          </div>
        </div>
      </div>
      <div className="mid-line"></div>
      <div className="how-it-works">
        <h5 className="title-home2">How it Works?</h5>
        <p className="description2">Watch it Now </p>
      </div>

      <div className="how-it-work-card">
        <Card
          emoji={browse}
          heading={"Browse Facilities"}
          detail={
            "Check out the best suited Venues, compare photos, special offers and function packages."
          }
        />

        <Card
          emoji={quotes}
          heading={"Request Quotes"}
          detail={
            "Get custom quotes of your short-listed Venues at the click of GET FREE QUOTES button."
          }
        />

        <Card
          emoji={calendar}
          heading={"Book a Venue"}
          detail={
            "Select and Book the perfect venue in no time at all. Time is money, save both."
          }
        />
      </div>
      <div className="title-3">
        <h5>Browse Vendors & Venue</h5>
      </div>
      <div className="vendor-cards">
        <VendorCards img={Photographer} heading={"Photographer"}></VendorCards>
        <VendorCards img={decorationv} heading={"Decorators"}></VendorCards>
        <VendorCards img={caters} heading={"Caters"}></VendorCards>
        <VendorCards img={mehandi} heading={"Mehandi Ceromany"}></VendorCards>
        <VendorCards img={makeup} heading={"Makeup Artist"}></VendorCards>
        <VendorCards img={cakev} heading={"Cake "}></VendorCards>
        <VendorCards img={dj} heading={"DJ"}></VendorCards>
        <VendorCards img={eventplan} heading={"Event Planers"}></VendorCards>
      </div>
      <div className="Event-container">
        <h2 className="Event-container-title">
          A space to host your next event
        </h2>
        <div className="Event-container-up">
          <div className="Event-container1">
           <div className="Eimg"> <img alt="img" className="Event-img1" src={Lawns}></img>{" "}</div>
            <p className="Event-sub-heading">Lawns</p>
            <p className="Event-discription">"Discover enchanting elegance at our wedding hall lawns, the perfect canvas for your dream celebration. Unparalleled beauty awaits your love story."</p>
          </div>
          <div className="Event-container2">
           <div className="Eimg"><img alt="img" className="Event-img1" src={achall}></img>{" "}</div>
            <p className="Event-sub-heading">AC Hall</p>
            <p className="Event-discription">"Discover enchanting elegance at our wedding hall lawns, the perfect canvas for your dream celebration. Unparalleled beauty awaits your love story."</p>
          </div>
        </div>
        <div className="Event-container-down">
        <div className="Event-container1">
            <div className="Eimg"><img alt="img" className="Event-img1" src={opeandining}></img>{" "}</div>
            <p className="Event-sub-heading">Open Dining</p>
            <p className="Event-discription">"Discover enchanting elegance at our wedding hall lawns, the perfect canvas for your dream celebration. Unparalleled beauty awaits your love story."</p>
          
          </div>
          <div className="Event-container2">
           <div className="Eimg"> <img alt="img" className="Event-img1" src={openhall}></img>{" "}</div>
            <p className="Event-sub-heading">Open Hall</p>
            <p className="Event-discription">"Discover enchanting elegance at our wedding hall lawns, the perfect canvas for your dream celebration. Unparalleled beauty awaits your love story."</p>
          </div>
        </div>
      </div>
      <Planning/>
      <Amenities/>
      <Footer/>
    </>
  );
};

export default Home;
